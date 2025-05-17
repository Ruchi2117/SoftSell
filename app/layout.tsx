import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import SmoothScroll from '@/components/animations/SmoothScroll';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <SmoothScroll>
                        {children}
                    </SmoothScroll>
                </ThemeProvider>
            </body>
        </html>
    );
} 