import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { OpenpanelProvider } from '@openpanel/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WASM Cairo',
  description: 'A suite of development tools and an environment for Cairo, all based on WebAssembly.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <OpenpanelProvider
          url="https://api.openpanel.dev"
          clientId="2dad9217-6af4-457d-97ec-b2de365733ac"
          trackScreenViews={true}
          // trackAttributes={true}
          // trackOutgoingLinks={true}
          // If you have a user id, you can pass it here to identify the user
          // profileId={'123'}
        />
      </body>
    </html>
  );
}
