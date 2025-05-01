import React from 'react';

const PodpriNas = () => {
  return (
    <article className="article">
     <h1 className="head-subtitle">Dohodnina in Donacije</h1>

    <section className="mb-6">
      <h2 className="head-description dark:text-white">Namenite del dohodnine PD Žusem</h2>
      <p className="text-textColor dark:text-darkOnSurface">
        Del svoje odmerjene dohodnine (do 1%) lahko namenite Planinskemu društvu
        Žusem – donacija je za vas brezplačna, z njo pa boste pripomogli k
        razvoju planinskih poti in dejavnosti društva.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="head-description dark:text-white">Kako podarite 1% dohodnine?</h2>
      <p className="text-textColor dark:text-darkOnSurface">
        Postopek je enostaven, ne predstavlja dodatnega stroška in omogoča, da
        del sredstev, ki bi sicer pripadel državnemu proračunu, usmerite v
        aktivnosti PD Žusem. To lahko storite na več načinov:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Prek spletne strani eDavki (davčna številka PD Žusem: 34119612)</li>
        <li>Pisno ali ustno na zapisnik pri pristojnem davčnem organu</li>
        <li>Z izpolnitvijo predizpolnjenega obrazca in pošiljanjem na davčni urad</li>
      </ul>
      <p className="mt-2 font-semibold">Hvala vsem, ki nas že podpirate!</p>
    </section>

    <section className="mb-6">
      <h2 className="head-description dark:text-white">Donacije pravnih oseb</h2>
      <p className="text-textColor dark:text-darkOnSurface">
        Pravne osebe lahko donirajo društvu in si s tem zmanjšajo davčno osnovo,
        skladno s 59. členom Zakona o davku od dohodkov pravnih oseb. Donacije
        lahko namenite splošnemu delovanju društva ali specifičnim področjem,
        kot so urejanje planinskih poti, dejavnosti mladih itd.
      </p>
      <p className="mt-2 font-semibold">Podatki za nakazilo:</p>
      <p className="mt-2">TRR: SI56 1967 0500 9898 643 (DBS d.d.)</p>
      <p className="mt-2">Namen: Donacija PD Žusem</p>
    </section>

    <p className="head-subtitle">Hvala, ker podpirate PD Žusem!</p>
    </article>
  );
};

export default PodpriNas;
