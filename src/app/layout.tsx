import type { Metadata } from 'next';
import { Bricolage_Grotesque, DM_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';
import ThemeProviders from '@/provider/ThemeProvider';
import SessionProviderWrap from '@/provider/SessionProvider';
import CustomCursor from '@/components/CustomCursor';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});
const bricolageGrotesque = Bricolage_Grotesque({
  variable: '--font-bricolage-grotesque',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const dMSans = DM_Sans({
  variable: '--font-dMSans',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title:
    'Md. Alamin | Full-Stack Developer (Next.js, Node.js, MongoDB, Prisma, Payments)',

  description:
    'Portfolio of Md. Alamin, a Full-Stack developer building fast, secure full-stack products with Next.js, Node.js, Prisma, MongoDB, and payment-integrated web apps from database schema to checkout flow.',

  keywords: [
    'Md. Alamin',
    'Full-Stack Developer',
    'Next.js Developer',
    'Node.js Developer',
    'MongoDB Developer',
    'Prisma Developer',
    'Prisma ORM',
    'React Developer',
    'Stripe Integration',
    'Web Developer Portfolio',
    'JavaScript Developer',
    'Node.js Developer',
  ],

  authors: [{ name: 'Md. Alamin', url: SITE_URL }],
  creator: 'Md. Alamin',
  publisher: 'Md. Alamin',

  metadataBase: new URL(SITE_URL),

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title: 'Md. Alamin | Full-Stack Developer',

    description:
      'Full-stack developer specializing in Next.js, Node.js, Prisma, MongoDB, and payment-integrated web apps. Explore real-world projects built end-to-end from planning to deployment.',

    siteName: "Alamin's Portfolio",

    url: SITE_URL,

    type: 'website',

    locale: 'en_US',

    images: [
      {
        url: `${SITE_URL}/admin_overview_.webp`,
        width: 1200,
        height: 630,
        alt: 'Md. Alamin Portfolio Preview',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Md. Alamin | Full-Stack Developer',

    description:
      'Full-Stack developer building fast, secure products with Next.js, Node.js, Prisma, MongoDB, and Stripe from database to checkout.',

    images: [`${SITE_URL}/admin_overview_.webp`],

    creator: '@',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'MID-BfusUrUH6pHhcVPb3vds8maah1ld4XKFHMPryIM',
  },

  category: 'technology',
};

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Md. Alamin',
  url: SITE_URL,
  image: `${SITE_URL}/admin_overview_.webp`,
  jobTitle: 'Full-Stack Developer',
  description:
    'Full-Stack developer specializing in Next.js, Node.js, Prisma, MongoDB, and payment-integrated web applications.',
  sameAs: [
    `https://github.com/alamin-one`,
    `https://www.linkedin.com/in/alamin-one/`,
    `https://twitter.com`,
  ],
  knowsAbout: [
    'Next.js',
    'React',
    'MongoDB',
    'Prisma',
    'Node.js',
    'Express',
    'Stripe',
    'TypeScript',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${bricolageGrotesque.variable}  ${dMSans.variable}  h-full antialiased selection:text-title-secondary selection:bg-title-secondary/10`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProviders>
          <SessionProviderWrap>
            <CustomCursor />
            {children}
          </SessionProviderWrap>
        </ThemeProviders>
      </body>
    </html>
  );
}
            