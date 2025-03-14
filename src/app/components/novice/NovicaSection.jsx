'use client';

import React, { useState, useRef, useEffect } from 'react';
import NovicaCard from './NovicaCard';
import Novica from './Novica';
import Ikona from '../Ikona';

const NovicaSection = () => {
  const [novice, setNovice] = useState([]);
  const [selectedNovica, setSelectedNovica] = useState(null);
  const [showAllNovice, setShowAllNovice] = useState(false);
  const sectionRef = useRef(null);
  const NOVICE_LIMIT = 6;

  useEffect(() => {
    fetchNovice();
  }, []);

  const fetchNovice = async () => {
    try {
      const response = await fetch('/api/novice');
      const data = await response.json();
      // Sort novice by date in descending order
      const sortedNovice = data.sort((a, b) => new Date(b.datum) - new Date(a.datum));
      setNovice(sortedNovice);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const handleNovicaSelect = (novica) => {
    setSelectedNovica(novica);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const displayedNovice = showAllNovice ? novice : novice.slice(0, NOVICE_LIMIT);
  const hasMoreNovice = novice.length > NOVICE_LIMIT;

  return (
    <div 
      ref={sectionRef} 
      className="section-container"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="section-title">
        <h1 className="head-title">
          <Ikona />
          Aktualno
        </h1>
        <p className="head-description">Novice in aktualni dogodki v Planinskem društvu Žusem</p>
        {selectedNovica && (
          <button className="back-btn" onClick={() => setSelectedNovica(null)}>
            Nazaj
          </button>
        )}
      </div>
      <div>
        {selectedNovica ? (
          <Novica novica={selectedNovica} />
        ) : (
          <>
            <div className="card-container">
              {displayedNovice.map((novica) => (
                <NovicaCard 
                  key={novica.id} 
                  novica={novica} 
                  onClick={() => handleNovicaSelect(novica)}
                />
              ))}
            </div>
            {hasMoreNovice && !showAllNovice && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setShowAllNovice(true)}
                  className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  <span>Arhiv novic</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </button>
              </div>
            )}
            {showAllNovice && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setShowAllNovice(false)}
                  className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors flex items-center gap-2"
                >
                  <span>Prikaži manj</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NovicaSection;
