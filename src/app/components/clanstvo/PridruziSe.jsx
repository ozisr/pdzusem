import React from 'react';

const PridruziSe = () => {
  return (
    <article className="article">
      <h1 className="head-subtitle">Postanite član Planinskega društva Žusem</h1>
      <p className="mb-4 text-textColor dark:text-darkOnSurface">
        Z včlanitvijo v Planinsko društvo Žusem postanete tudi član Planinske zveze Slovenije (PZS) in del skupnosti
        ljubiteljev pohodništva, gora in narave. Kot član PD Žusem se lahko pridružite različnim organiziranim
        dejavnostim, ki jih vodijo izkušeni vodniki. Naši izleti so prilagojeni tako rekreativnim pohodnikom kot tistim,
        ki iščejo večji izziv. Mladim planincem je namenjen mladinski odsek, kjer spoznavajo lepote planinstva na
        zanimiv in varen način.
      </p>
      <p className="mb-4 text-textColor dark:text-darkOnSurface">
        Pridružite se lahko tudi markacistom in prispevate k urejanju ter vzdrževanju planinskih poti. Če vas zanima
        varovanje narave, pa lahko sodelujete pri projektih ohranjanja čistega in urejenega gorskega okolja. S
        članstvom v PD Žusem podprete naša prizadevanja za razvoj planinske dejavnosti in ohranjanje naravne
        dediščine.
      </p>
      <h2 className="head-description dark:text-white">Kako se včlanim?</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Osebno</strong> v društveni pisarni PD Žusem v času uradnih ur.</li>
        <li>
          <strong>Preko spleta</strong> na strani
          <a href="https://clanarina.pzs.si" className="text-blue-500 hover:underline"> clanarina.pzs.si</a>, kjer
          izberete PD Žusem in članarino poravnate s kreditno kartico. Člansko znamkico ali izkaznico prejmete po pošti.
        </li>
        <li><strong>Na sedežu Planinske zveze Slovenije</strong> v času uradnih ur.</li>
        <li>
          <strong>Na bencinskih servisih Petrol</strong> v poletni sezoni (potrebna je naknadna aktivacija na
          <a href="https://clanarina.pzs.si" className="text-blue-500 hover:underline"> clanarina.pzs.si</a>).
        </li>
      </ul>
      <h2 className="head-description dark:text-white">Višina in vrsta članarin za leto 2025</h2>
      <p className="mb-4 text-textColor dark:text-darkOnSurface">
        S članstvom pridobite številne ugodnosti: možnost udeležbe na društvenih aktivnostih, zavarovanje, popuste pri
        prenočevanju v planinskih kočah PZS, ugodnosti pri nakupu opreme in še več.
      </p>
      <p className="head-subtitle">Vabljeni, da postanete del PD Žusem in skupaj z nami odkrivate lepote planinarjenja!</p>
    </article>
  );
};

export default PridruziSe;
