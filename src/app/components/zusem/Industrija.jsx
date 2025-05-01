import React from 'react';
import Image from 'next/image';

const Industrija = () => {
  return (
    <>
      <p className="text-textColor dark:text-darkOnSurface">
        Zaradi hribovitega terena in omejenih ravninskih površin je gospodarstvo regije večinoma usmerjeno v kmetijstvo, živinorejo in trgovino. Industrijska dejavnost je zelo redka – npr. Koval v Loki pri Žusmu. Se pa zaradi primerne kamnitske zgradbe izbrablja za pridobivanje gramoza in tako sta se na njegovih pobočjih hitro razširila kar dva kamnoloma. Zaradi bližine večjih urbanih središč prebivalci odhajajo na delo v okolico industrijskih centrov ob Savinji, Voglajni, Sotli in predvsem v Celje. V zadnjih letih se postopoma uveljavlja butični turizem, saj so prebivalci prepoznali potenciale, ki jih v tem okolju lahko ponudijo potencialnim gostom. Dober zgled najdejo v sosednji občini Podčetrtek, ki je turistično med najbolj razvitimi občinami v Sloveniji.
      </p>
      <figure>
        <Image
        src="/images/vsebina/kamnolom.jpg"
        alt="Žusemski kamnolom, slikan iz višine s vzhodne strani"
        width={400}
        height={400}
        className="m-auto"/>
        <figcaption className="caption">Slika: Eden od dveh kamnolomov na pobočjih Žusma</figcaption>
      </figure>
    </>
  )
};

export default Industrija;