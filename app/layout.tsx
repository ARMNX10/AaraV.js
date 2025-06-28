import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import PageLayout from './components/PageLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aarav Maan - AI Engineer & Full Stack Developer',
  description: 'Portfolio of Aarav Maan - AI Engineer with expertise in Machine Learning, LangChain, and Software Development',
  keywords: 'AI Engineer, Machine Learning, LangChain, Software Developer, Python, Next.js',
  authors: [{ name: 'Aarav Maan' }],
  openGraph: {
    title: 'Aarav Maan - AI Engineer & Developer',
    description: 'Explore the portfolio of Aarav Maan, an AI Engineer specializing in Machine Learning and Software Development',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white overflow-x-hidden`}>
        <PageLayout>
          {children}
        </PageLayout>
      </body>
    </html>
  )
}