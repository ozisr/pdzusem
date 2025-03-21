import React from 'react';
import Image from 'next/image';
import Ikona from '../Ikona';
import Ostolpu from './Ostolpu';

const stolp = '/images/stolp.jpeg';

const Stolp= () => {
  return (
    <section id="stolp" className="section bg-white">
      <div className="section-container">
        <div className="section-title">
          <h1 className="head-title">
          <Ikona />
          Stolp Ljubezni</h1>
          <p className="head-description">Vse kar si želite vedeti o "Stolpu Ljubezni"</p>
        </div>
        <div className="flex flex-col">
          <article className="article">
            <div>
              <div className="lg:float-right lg:w-1/3 lg:ml-2">
                <Image
                  src={stolp}
                  alt="Stolp Ljubezni"
                  className="rounded-lg shadow-lg"
                  width={400}
                  height={300}
                  priority
                />
              </div>
                <h2 className="head-subtitle">Nekaj o Stolpu Ljubezni</h2>
                <h3 className="head-description dark:text-white">Stolp ljubezni na Žusmu – razgled, tradicija in simbol ljubezni</h3>
                <p className="text-textColor dark:text-darkOnSurface">
                  Na severnem robu Kozjanskega, na vrhu Velikega Špička, stoji Stolp ljubezni, ena najlepših razglednih točk v Sloveniji. Njegovo ime ni naključno – povezan je s cerkvijo sv. Valentina, zavetnika zaljubljencev, ki že stoletja bdi nad tem krajem. Ljubezenska simbolika se prepleta z osupljivimi razgledi, ki segajo od Kamniško-Savinjskih Alp, Karavank in Pohorja, pa vse do Boča, Donačke gore ter hribov na jugu, kot so Kunšperška gora, Orlica in Bohor.
                  Stolp, visok 25,9 metra, je bil zgrajen leta 2009 s predanim prostovoljnim delom članov Planinskega društva Žusem. Na vrh vodi 116 stopnic, razdeljenih med 22 podestov, ki obiskovalcem omogočajo postopno uživanje v vedno širših panoramskih pogledih. Njegova lesena konstrukcija iz macesnovega lesa, podprta z betonom in nerjavečo kovino, se harmonično zliva z naravo in pričara občutek topline in tradicije.
                  A Stolp ljubezni ni zgolj arhitekturna znamenitost – postal je priljubljena točka za zaroke, saj se na njem nahaja tudi zvon želja, ki ga pari pogosto zazvonijo v upanju na srečno skupno prihodnost. Vsako leto v februarju tu poteka Valentinov nočni pohod, ki privabi številne pohodnike in romantike.
                  S svojo zgodbo, edinstveno arhitekturo in dih jemajočimi razgledi Stolp ljubezni ni le simbol kraja, temveč tudi kraj spominov, sreče in nepozabnih trenutkov.
                </p>
              <Ostolpu />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Stolp;