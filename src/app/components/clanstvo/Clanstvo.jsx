'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Ikona from '../Ikona';
import PridruziSe from './PridruziSe';
import PodpriNas from './PodpriNas';

const Clanstvo = () => {
  const [selectedPodpora, setSelectedPodpora] = useState(null);

  return (
    <section id="clanstvo" className="section">
      <div className="section-container">
        <div className="section-title">
          <h1 className="head-title">
          <Ikona />
          Članstvo
          </h1>
          <p className="head-description">Prispevaj in pomagaj</p>
          {selectedPodpora && (
           <button className="back-btn" onClick={() => setSelectedPodpora(null)}>
            Nazaj
            </button>
          )}
        </div>
        <div className="flex w-full max-w-screen-lg mt-0">
          {selectedPodpora ? (
            selectedPodpora === 'pridruziSe' ? <PridruziSe /> : <PodpriNas />
          ) : (
            <div className="podpora">
              <div className="podpora-card" onClick={() => setSelectedPodpora('pridruziSe')}>
                <Image 
                src="/images/icons/pridruzi_se.svg"
                alt="ikona pridruži se"
                width={50}
                height={50}
                className="m-auto mb-3"
                />
                <h2 className="head-subtitle">PRIDRUŽI SE NAM</h2>
                <p>Postani član PD Žusem</p>
              </div>

              <div className="podpora-card" onClick={() => setSelectedPodpora('podpriNas')}>
                <Image 
                src="/images/icons/podpri_nas.svg"
                alt="ikona podpri nas"
                width={50}
                height={50}
                className="m-auto mb-3"
                />
                <h2 className="head-subtitle">PODPRI NAS</h2>
                <p>Nameni nam del dohodnine ali doniraj</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Clanstvo;
