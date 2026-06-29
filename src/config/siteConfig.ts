export type SiteMode = 'POD' | 'VAULT';
export interface SiteConfig {
  domain: string;
  brandName: string;
  mode: SiteMode;
  defaultCurrency: 'AUD' | 'USD';
  accentColor: string;
  assetBaseUrl?: string;
}
export const SITE_CONFIG: SiteConfig = {
  domain: 'poster.photography',
  brandName: 'Poster Photography',
  mode: 'POD',
  defaultCurrency: 'AUD',
  accentColor: '#d4af37',
};
