import React from 'react';
import { GeistSans } from 'geist/font/sans';
import ThemeProvider from './components/ThemeProvider';
import './globals.css';


export const metadata = {
  title: "Dobrodošli - PD Žusem",
  description: "Spletna stran Planinskega društva Žusem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sl" suppressHydrationWarning className={GeistSans.className}>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
