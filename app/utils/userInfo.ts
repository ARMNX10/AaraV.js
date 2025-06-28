interface IPInfo {
  ip: string;
  network: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_name: string;
  country_code: string;
  country_code_iso3: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  country_area: number;
  country_population: number;
  asn: string;
  org: string;
}

export async function getUserIPInfo(): Promise<{
  ip: string;
  network: string;
  location: string;
  isp: string;
  device: string;
} | null> {
  try {
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) throw new Error('Failed to fetch IP info');
    
    const data: IPInfo = await response.json();
    
    return {
      ip: data.ip,
      network: data.org || 'Unknown Network',
      location: [data.city, data.region, data.country_name].filter(Boolean).join(', '),
      isp: data.org || 'Unknown ISP',
      device: typeof window !== 'undefined' 
        ? window.navigator.userAgent 
        : 'Unknown Device'
    };
  } catch (error) {
    console.error('Error fetching IP info:', error);
    return null;
  }
}

export function obfuscateIP(ip: string): string {
  if (!ip) return 'Unknown';
  const parts = ip.split('.');
  if (parts.length !== 4) return ip;
  return `${parts[0]}.${'*'.repeat(3)}.${'*'.repeat(3)}.${parts[3]}`;
}
