'use client';
import React from 'react';
import Onas from './Onas';
import Novicnik from './Novicnik';
import { useState } from 'react';
import Admin from './Admin';
const Noga = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <footer id="noga" className="footer">
        <div className="footer-container">
          <Onas />
          <Novicnik />
          <Admin />
        </div>
        <hr className="mx-36 mb-3"></hr>
        <p 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="transition-opacity duration-300"
        >
          {hovered ? (
            <>
            Oblikovanje in razvoj: <a href="mailto:ozis.rok@gmail.com" className="cursor-pointer hover:underline">Rok</a>
            </>
          ) : (
            <>
            &copy; Planinsko društvo Žusem 2025 
            </>
          )}
        </p>
    </footer>
  );
};

export default Noga;
