import React from 'react';
import Ikona from '../Ikona';
import Ozusmu from './Ozusmu';
import Zgodovina from './Zgodovina';
import Image from 'next/image';

const Zusem = () => {
  return (
    <section id="zusem" className="section bg-white">
      <div className="section-container">
        <div className="section-title">
          <h1 className="head-title">
          <Ikona />
          Žusem 
          </h1>
          <p className="head-description">Nekaj zanimivosti o kozjanskem očaku</p>
        </div>
        <div className="flex flex-col">
          <article className="article">
              <h2 className="head-subtitle">O Žusmu</h2>
              <p className="text-textColor dark:text-darkOnSurface">
              Žusem je 669 metrov visok hrib s pestro zgodovino in velikim potencialom za prihodnost. Predstavlja severni rob Kozjanskega, njegovo ime pa izvira iz priimka prvega lastnika gradu, žusemskega viteza in krškega ministeriala Poppa de Suzzenheima. Pogled z Žusma proti jugu nam razkriva ločnico med dvema svetovoma: predalpskim in subpanonskim. Na zahodu in jugu se dvigajo hribovja, sestavljena pretežno iz dolomita in apnenca, z najvišjimi vrhovi med 500 in 800 metri (Kunšperška gora, Orlica, Vetrnik, Oslica, Rudnica, Bohor), ki spadajo k vzodno Posavskem hribovju, to pa sodi v predalpski svet. Na južnem pobočju Žusma se razprostira naselje Dobrina, na zahodnem pa Hrastje.
              </p>
              <figure>
                <Image
                src="/images/vsebina/zusem.jpg"
                alt="Žusem kot ga vidimo iz hriba Sv. Helena"
                width={400}
                height={400}
                className="m-auto"/>
                <figcaption className="caption">Slika: Žusem</figcaption>
              </figure>
              <p className="text-textColor dark:text-darkOnSurface">
              V zadnjih letih se turistične in druge aktivnosti na Žusmu in v njegovi okolici zelo razvijajo. Izpostaviti velja zlasti pohodništvo in jadralno padalstvo. Bližina Slivniškega jezera prinaša tudi individualni izletniški turizem, kar dobro vpliva na razvoj okoliških turističnih kmetij. Potencial ima tudi razvoj zdraviliškega turizma pri Grajskem vrelcu v Dobrini.
              </p>
              <Ozusmu />
            </article>
            <article className="article">
              <h2 className="head-subtitle">Zgodovina</h2>
              <p className="text-textColor dark:text-darkOnSurface">
              Na Žusmu so našli svoje zatočišče Žusemski knezi, ki se prvič omenjajo leta 1203. Na njihovo prisotnost še danes opozarjajo ruševine gradu, pa tudi drugi kulturni spomeniki (ječe, temelji stolpov Turn Žusenek nad Dobrino in Turn na Sv. Heleni) in nekatera ledinska imena v okolici Žusma (Grofov štant, Ječovo, Grajski vrelec). Grofija Žusemska je obsegala sam Žusem, Žamerk, Loko pri Žusmu, do Spodnjega Tinskega, ves Sveti Štefan, Drobinsko in del Slivnice. Grad je bil eden večjih in močnejših gradov in je gospodoval tem krajem celih osemsto let, lastniki pa so se pogosto menjavali.
              </p>
              <Zgodovina />
            </article>
        </div>
      </div>
    </section>
  );
};

export default Zusem;