'use client'

import { useEffect, useState, useCallback } from 'react';

type CorruptedTextProps = {
  text: string;
  intervalDuration?: number;
  characters?: string;
  wordDelay?: number;
};

type WordAnimation = {
  text: string;
  isAnimating: boolean;
  currentIndex: number;
  original: string;
};

export default function CorruptedText({ 
  text, 
  intervalDuration = 300,
  characters = '!<>_\\/^*-+=#sdfgh567dfgcvb.,;[]-iyut0',
  wordDelay = 100
}: CorruptedTextProps) {
  const [wordAnimations, setWordAnimations] = useState<WordAnimation[]>([]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // Split text into words and initialize animation states
  useEffect(() => {
    const words = text.split(' ');
    setWordAnimations(
      words.map(word => ({
        text: '',
        isAnimating: false,
        currentIndex: 0,
        original: word + (word ? ' ' : '') // Add space back for separation if not empty
      }))
    );
  }, [text]);

  // Animate a single character
  const animateCharacter = useCallback((wordIndex: number, charIndex: number) => {
    if (wordIndex >= wordAnimations.length) {
      setIsAnimating(false);
      return;
    }

    const word = wordAnimations[wordIndex];
    if (!word || charIndex >= word.original.length) {
      // Start next word animation with a small delay
      setTimeout(() => {
        setWordAnimations(prev => {
          const next = [...prev];
          next[wordIndex] = { ...next[wordIndex], isAnimating: false };
          if (wordIndex + 1 < next.length) {
            next[wordIndex + 1] = { ...next[wordIndex + 1], isAnimating: true };
          }
          return next;
        });
        
        // Start animating the next word
        if (wordIndex + 1 < wordAnimations.length) {
          animateCharacter(wordIndex + 1, 0);
        }
      }, wordDelay);
      return;
    }

    // Animate current character
    setWordAnimations(prev => {
      const next = [...prev];
      const currentWord = next[wordIndex];
      
      // Get a random character from our character set
      const randomChar = characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      
      // Build the current word with the new random character
      const newText = 
        currentWord.original.substring(0, charIndex) + 
        randomChar + 
        (charIndex < currentWord.original.length - 1 
          ? currentWord.original.substring(charIndex + 1) 
          : '');
      
      next[wordIndex] = {
        ...currentWord,
        text: newText,
        currentIndex: charIndex
      };
      
      return next;
    });

    // Schedule next frame
    const timeout = setTimeout(() => {
      // Every few frames, reveal the actual character
      if (Math.random() > 0.6) { // Increased chance to move to next character for smoother flow
        setWordAnimations(prev => {
          const next = [...prev];
          const currentWord = next[wordIndex];
          
          // Reveal the current character
          const newText = 
            currentWord.original.substring(0, charIndex + 1) +
            (charIndex < currentWord.original.length - 1 
              ? currentWord.original.substring(charIndex + 1).replace(/[^\\s]/g, '_') 
              : '');
          
          next[wordIndex] = {
            ...currentWord,
            text: newText,
            currentIndex: charIndex + 1
          };
          
          return next;
        });
        
        // Move to next character
        animateCharacter(wordIndex, charIndex + 1);
      } else {
        // Keep animating current character
        animateCharacter(wordIndex, charIndex);
      }
    }, intervalDuration);

    return () => clearTimeout(timeout);
  }, [wordAnimations, intervalDuration, characters, wordDelay]);

  // Start animation when component mounts or when text changes
  useEffect(() => {
    if (wordAnimations.length > 0 && !isAnimating) {
      setIsAnimating(true);
      setWordAnimations(prev => {
        const next = [...prev];
        if (next.length > 0) {
          next[0] = { ...next[0], isAnimating: true };
        }
        return next;
      });
      animateCharacter(0, 0);
    }
  }, [wordAnimations, isAnimating, animateCharacter]);

  // Combine all word animations
  const displayText = wordAnimations
    .map(word => word.text || '')
    .join('')
    .trimEnd();

  return <span>{displayText || ' '.repeat(text.length)}</span>;
}
