import { Analytics } from '@vercel/analytics/react';
import { Inter, Playfair_Display } from 'next/font/google';
import Providers from './providers';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','700'], variable: '--font-playfair' });

export const metadata = {
  title: 'Ifedolapo Ajayi – Frontend Engineer Portfolio',
  description: 'Personal portfolio showcasing projects such as Beyond the Pain, Urban Threads, Telemedicine Website, and more. Built with Next.js, Tailwind CSS, and modern UI/UX patterns.',
  openGraph: {
    title: 'Ifedolapo Ajayi – Frontend Engineer Portfolio',
    description: 'Explore my web development projects and learn more about my work.',
    images: ['/profile_img.jpg'],
    url: 'https://ifedolapoajayi.vercel.app',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ifedolapo Ajayi",
            "url": "https://ifedolapoajayi.vercel.app",
            "sameAs": [
              "https://github.com/ifedolapo01",
              "https://www.linkedin.com/in/ifedolapo-ajayi-3500aa1b2/"
            ],
            "jobTitle": "Frontend Engineer",
            "worksFor": {
              "@type": "Organization",
              "name": "Self-Employed"
            }
          })}}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <Navbar />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}