'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const Section1 = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme || systemTheme || 'light' : 'light';

  return (
    <section className="h-fit w-full bg-cover transition-all"
    style={{
      backgroundImage: `url(${currentTheme === 'dark' ? '/images/100.png' : '/images/konec.png'})`,
    }}
    >
    </section>
  );
};

export default Section1;