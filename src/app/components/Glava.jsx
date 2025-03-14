'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const logo = '/images/pdzusem_logo.svg';
  const facebookLogoDay = '/images/icons/facebook_day.svg';
  const facebookLogoNight = '/images/icons/facebook_night.svg';
  const instagramLogoDay = '/images/icons/instagram_day.svg';
  const instagramLogoNight = '/images/icons/instagram_night.svg';
  const darkModeIconDay = '/images/icons/mode_day.svg';
  const darkModeIconNight = '/images/icons/mode_dark.svg';

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme || systemTheme || 'light' : 'light';

  if (!mounted) return <div className="h-screen w-full bg-gray-200"></div>;

  return (
    <header
      className="h-screen w-full bg-cover transition-all"
      style={{
        backgroundImage: `url(${currentTheme === 'dark' ? '/images/100.png' : '/images/konec.png'})`,
      }}
    >
      <div className="flex justify-between items-baseline p-2">
        <div className="flex">
          <a
            href="https://www.facebook.com/planinskodrustvo.zusem/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="pr-1"
          >
            <Image
              key={currentTheme}
              src={currentTheme === 'dark' ? facebookLogoNight : facebookLogoDay}
              alt="Facebook ikona"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://www.instagram.com/pdzusem/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Image
              key={currentTheme}
              src={currentTheme === 'dark' ? instagramLogoNight : instagramLogoDay}
              alt="Instagram ikona"
              width={30}
              height={30}
            />
          </a>
        </div>
        <button onClick={() => setTheme(theme === 'light' || !theme ? 'dark' : 'light')}>
          <Image
            key={currentTheme}
            src={currentTheme === 'dark' ? darkModeIconNight : darkModeIconDay}
            alt="Dark mode ikona"
            width={35}
            height={35}
          />
        </button>
      </div>
      <div className="flex flex-col justify-end h-4/5">
        <h1 className="futura-title text-center text-5xl text-secondary">Dobrodošli na spletni strani</h1>
        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="Logo Planinskega društva Žusem"
            className="max-w-full max-h-full"
            width={350}
            height={600}
            suppressHydrationWarning      
          />
        </div>  
      </div>
    </header>
  );
};

export default Header;
