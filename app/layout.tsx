import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Montserrat } from 'next/font/google';
import type { ReactNode } from 'react';

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={montserrat.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
