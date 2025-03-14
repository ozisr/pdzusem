'use client';
import React, { useState, useRef, useEffect } from 'react';
import PotCard from './PotCard';
import Pot from './Pot';
import Ikona from '../Ikona';


const PotSection = () => {
  const [selectedPot, setSelectedPot] = useState(null);
  const [poti, setPoti] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchPoti = async () => {
      try {
        const response = await fetch('/api/poti');
        const data = await response.json();
        setPoti(data);
      } catch (error) {
        console.error('Error fetching paths:', error);
      }
    };

    fetchPoti();
  }, []);

  const handlePotSelect = (pot) => {
    setSelectedPot(pot);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div ref={sectionRef} className="section-container">
      <div className="section-title">
        <h1 className="head-title">
          <Ikona />
          Poti
        </h1>
        <p className="head-description">Preglejte poti, za katere skrbi naše planinsko društvo</p>
        {selectedPot && (
          <button className="back-btn" onClick={() => setSelectedPot(null)}>
            Nazaj
          </button>
        )}
      </div>
      <div>
        {selectedPot ? (
          <Pot pot={selectedPot} />
        ) : (
          <div className="card-container">
            {poti.map((pot) => (
              <PotCard 
                key={pot.id} 
                pot={pot} 
                onClick={() => handlePotSelect(pot)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PotSection;
