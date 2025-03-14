'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react'

export default function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem suppressHydrationWarning>
      {children}
    </NextThemeProvider>
  );
} 