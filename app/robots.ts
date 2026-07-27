import { MetadataRoute } from 'next';

// TODO: cambiar la URL del sitemap a https://ilmassone.es/sitemap.xml cuando el dominio esté conectado
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://web-pizzeria-self.vercel.app/sitemap.xml',
  };
}
