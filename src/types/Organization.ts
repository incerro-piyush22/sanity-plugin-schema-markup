import { Logo } from './Common';

export type Organization = {
  type: string;
  id?: string;
  name?: string;
  alternateName?: string;
  url?: string;
  logo?: Logo;
  contactPoint?: Array<{
    type?: string;
    id?: string;
    telephone?: string;
    contactType?: string;
    contactOption?: string[];
    areaServed?: string[];
    availableLanguage?: string[];
  }>;
  sameAs?: string[];
};
