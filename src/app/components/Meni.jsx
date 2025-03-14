'use client';
import React, { useEffect, useState, useRef } from 'react';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);
  const wrapperRef = useRef(null);
  
  // Add this function to handle smooth scrolling with offset
  const handleNavClick = (e) => {
    if (isMobile) return; // Let default behavior work on mobile
    
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    const handleScroll = () => {
      if (isMobile) {
        // Mobile scroll behavior
        const currentScrollPos = window.scrollY;
        if (navbarRef.current) {
          if (prevScrollpos > currentScrollPos) {
            navbarRef.current.style.transform = 'translateY(0)';
          } else {
            navbarRef.current.style.transform = 'translateY(100%)';
          }
        }
        prevScrollpos = currentScrollPos;
      } else {
        // Desktop scroll behavior
        if (wrapperRef.current && navbarRef.current) {
          const wrapperRect = wrapperRef.current.getBoundingClientRect();
          if (wrapperRect.top <= 0) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        }
      }
    };

    let prevScrollpos = window.scrollY;

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <>
      {!isMobile && (
        <div 
          ref={wrapperRef}
          className="h-[80px]"
          aria-hidden="true"
        />
      )}
      <nav 
        ref={navbarRef}
        className={`
          w-full transition-transform duration-300 ease-in-out
          ${isMobile ? 'fixed bottom-0' : isSticky ? 'fixed top-0' : 'absolute top-full'}
          z-50
        `}
      >
        <div className="bg-primary/60 backdrop-blur-sm overflow-hidden">
          <div className="relative">
            {/* Scroll indicators */}
            {isMobile && (
              <>
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-primary/60 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-primary/60 to-transparent z-10" />
              </>
            )}
            {/* Scrollable container */}
            <div className="overflow-x-auto scrollbar-hide">
              <ul className={`
                flex py-2 px-8
                ${isMobile ? 'justify-start min-w-min space-x-2' : 'justify-center space-x-4'}
              `}>
                <li><a href="#domov" onClick={handleNavClick} className="nav-btn">Domov</a></li>
                <li><a href="#stolp" onClick={handleNavClick} className="nav-btn">Stolp Ljubezni</a></li>
                <li><a href="#poti" onClick={handleNavClick} className="nav-btn">Poti</a></li>
                <li><a href="#zusem" onClick={handleNavClick} className="nav-btn">Žusem</a></li>
                <li><a href="#clanstvo" onClick={handleNavClick} className="nav-btn">Članstvo</a></li>
                <li><a href="#galerija" onClick={handleNavClick} className="nav-btn">Galerija</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
