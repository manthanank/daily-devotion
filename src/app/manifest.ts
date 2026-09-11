import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'नित्य भक्ति | Nitya Bhakti - Daily Hindu Prayers, Stotras & Pure Music',
    short_name: 'नित्य भक्ति',
    description:
      'Distraction-free daily Hindu devotional web player featuring authentic Aartis, Bhajans, Chalisas, and Stotras for all 7 days of the week: Surya Dev, Shiva, Hanuman, Ganesha, Vitthal, Krishna, Vishnu, Brihaspati, Lakshmi, Durga, and Shani Dev.',
    start_url: '/',
    display: 'standalone',
    background_color: '#070403',
    theme_color: '#ff8c00',
    icons: [
      {
        src: '/icon.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/apple-icon.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
      {
        src: '/assets/images/avatar.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  };
}
