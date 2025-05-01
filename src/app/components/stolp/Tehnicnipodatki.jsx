import React from 'react';
import Image from 'next/image';

const Tehnicnipodatki = () => {
  return (
    <>
      <h3 className="text-textColor dark:text-darkOnSurface">
        Pri zasnovi in gradnji Stolpa ljubezni so strokovnjaki in obrtniki poskrbeli za visoko kakovost ter trajnost gradnje. Uradni tehnični podatki stolpa so sledeči:
      </h3>
      <ul className="mt-3 text-textColor dark:text-darkOnSurface">
        <li className="mt-2">
          <strong>Višina stolpa:</strong> 25,90 m
        </li>
        <li className="mt-2">
          <strong>Stopnice:</strong> 116, na katerih so vklesani podporniki gradnje
        </li>
        <li className="mt-2">
          <strong>Podesti:</strong> 22, ki služijo kot prijetni postanki za počitek in občudovanje okolice
        </li>
        <li className="mt-2">
          <strong>Razgledni ploščadi:</strong> 2
        </li>
        <li className="mt-2">
          <strong>Materiali:</strong> Za gradnjo je bilo potrebnega 30 m³ armiranega betona za temelje, 44 m³ obdelanega macesnovega lesa ter 1500 kg nerjaveče kovine (inox) za sidra, sornike, vijake, distančnike in strelovod.
        </li>
        <li className="mt-2">
          <strong>Izdelava:</strong> Načrt in dokumentacijo je uredil arhitekt Andraž Torkar iz biroja <a className="link" href="https://www.torkar.si/" target="_blank" rel="noopener" title="Obiščite spletno stran arhitekturnega biroja P&A Torkar">P&A TORKAR</a>, temeljno ploščad so pripravili in zgradili pri Zidarstvu Zvone s.p., razrez in montažo lesenega del pa je izvedlo podjetje <a className="link" href="https://www.tesarstvo-stebe.si/" target="_blank" rel="noopener" title="Obiščite spletno stran Tesarstva Štebe">Tesarstvo in krovstvo Štebe Igor s.p</a>.
        </li>
      </ul>
      <figure>
          <Image
          src="/images/vsebina/stolp tehnicna risba.png"
          alt="Karikirana tehnična risba razglednega stolpa na Žusmu"
          width={200}
          height={200}
          className="m-auto"/>
      </figure>
    </>
  )
};

export default Tehnicnipodatki;