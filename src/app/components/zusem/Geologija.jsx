import React from 'react';
import Image from 'next/image';

const Geologija = () => {
  return (
    <>
      <p className="text-textColor dark:text-darkOnSurface">
        Ozemlje, na katerem se nahaja Žusem, je geološko zelo pestro. Sestavljeno je iz karbonskih, permskih, triasnih, jurskih, krednih, terciarnih in kvartarnih kamnin. Posebno pomembne so skladovnice triasnih in terciarnih kamnin, med katerimi se pojavljajo tudi jurski in kredni skledi ter karbonsko-permske plasti.V zgodovini regije so najstarejše kamnine iz paleozoika, ko je območje pokrivalo morje, medtem ko se v mezoiku (spodnji in mlajši trias) oblikujejo rjavi peščenjaki, dolomiti ter apnenci z bogato morsko favno. V obdobjih vulkanskega delovanja so nastajale tudi kamnine, kot so diabaz in vulkanski pepel. Tektonsko gibanje, ki v regiji prevladuje v smeri vzhod–zahod, je ustvarilo kompleksno mrežo antiklinal in sinklinalnih struktur, med katerimi izstopata Rudniška in Orliška antiklinala. Ti geološki procesi so oblikovali tako podlago in relief, kar vpliva tudi na pedološke in biološke značilnosti Žusma.
      </p>
      <figure>
        <Image
        src="/images/vsebina/geologija.png"
        alt="Graf, ki prikazuje geologija Kozjanskega v preseku od severa proti jugu, in po nadmorski višini."
        width={500}
        height={500}
        className="m-auto"/>
        <figcaption className="caption">Slika: Geologija področja </figcaption>
      </figure>
    </>
  )
};

export default Geologija;