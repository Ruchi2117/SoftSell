import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { PageTransition } from './animations/PageTransition';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export const Layout = ({
  children,
  title = 'SoftSell - Your Software Sales Solution',
  description = 'SoftSell helps you boost your software sales with AI-powered insights and automation tools.',
}: LayoutProps) => {
  const router = useRouter();

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content={`https://yourdomain.com${router.asPath}`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/og-image.jpg" />
        <meta name="twitter:url" content={`https://yourdomain.com${router.asPath}`} />
      </Head>

      <AnimatePresence mode="wait">
        <PageTransition key={router.pathname}>
          <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {children}
            <ThemeToggle />
          </main>
        </PageTransition>
      </AnimatePresence>
    </ThemeProvider>
  );
}; 