import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nityabhakti.app';
  const lastModified = new Date();

  const days = [
    { slug: 'sunday', priority: 0.9, freq: 'weekly' as const },
    { slug: 'monday', priority: 0.95, freq: 'weekly' as const },
    { slug: 'tuesday', priority: 0.95, freq: 'weekly' as const },
    { slug: 'wednesday', priority: 0.95, freq: 'weekly' as const },
    { slug: 'thursday', priority: 0.9, freq: 'weekly' as const },
    { slug: 'friday', priority: 0.95, freq: 'weekly' as const },
    { slug: 'saturday', priority: 0.9, freq: 'weekly' as const },
  ];

  const deities = [
    'vitthal',
    'shiva',
    'hanuman',
    'surya',
    'krishna',
    'vishnu',
    'ganesha',
    'lakshmi',
    'durga',
    'shani',
    'brihaspati',
  ];

  const dayRoutes: MetadataRoute.Sitemap = days.map((d) => ({
    url: `${baseUrl}/?day=${d.slug}`,
    lastModified,
    changeFrequency: d.freq,
    priority: d.priority,
  }));

  const deityRoutes: MetadataRoute.Sitemap = deities.map((d) => ({
    url: `${baseUrl}/?deity=${d}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.88,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...dayRoutes,
    ...deityRoutes,
  ];
}
