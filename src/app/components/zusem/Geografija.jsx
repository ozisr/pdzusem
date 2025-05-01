import React from 'react';
import Image from 'next/image';

const Geografija = () => {
  return (
    <>
      <p className="text-textColor dark:text-darkOnSurface">
        Žusem je eden izmed značilnih hribov Kozjanskega hribovja, ki se kot manjša, a prepoznavna enota razprostira na vzhodnem robu Posavskega hribovja. Regija, prehod med predalpskim in subpanonskim svetom, slovi po svojem hribovitem reliefu, ki je kot posledica omejeval tako razvoj večjih naselij kot tudi obsežno industrijsko dejavnost. V osrčju te pokrajine, kjer gravitacijska središča privabljajo prebivalce proti večjim mestom (npr. Celje), ostaja Žusem pomemben naravni in kulturni element, ki kljub demografskim izzivom ohranja svojo pristnost.
      </p>
      <figure>
        <Image
        src="/images/vsebina/kozjansko.png"
        alt="Lega pokrajine Kozjansko v Sloveniji"
        width={400}
        height={400}
        className="m-auto"/>
        <figcaption className="caption">Slika: Kozjansko </figcaption>
      </figure>
    </>
  )
};

export default Geografija;