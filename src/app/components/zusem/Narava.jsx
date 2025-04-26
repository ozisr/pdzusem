import React from 'react';
import Image from 'next/image';

const Narava = () => {
  return (
    <>
      <p>
        Žusem, kot najvzhodnejši odrastek Posavskega hribovja, se ponaša s svojo edinstveno naravno in biotsko raznolikostjo. Mogočnost hriba, ki se z svojo višino vzpenja nad drugimi lokalnimi vrhovi in jih presega za 100 metrov, ustvarja specifične mikroklimatske pogoje, ugodne za razvoj različnih rastlinskih in živalskih vrst. Tukaj tako najdemo tudi več gamsjih družin, šakale, mnogo vrst ptic, pa tudi travniške in gozdne cvetlice, pestra in raznolika pa je tudi priostnost gob. Lokalna flora in favna, vključno z značilnimi sredogorskimi vrstami, prispevata k edinstveni biološki dediščini regije, kar dodatno poudarja pomen ohranjanja te pokrajine.
      </p>
      <figure>
        <Image
        src="/images/vsebina/gams1.jpg"
        alt="Gams na travniku na pobočjih Žusma"
        width={400}
        height={400}
        className="m-auto"/>
        <figcaption className="caption">Slika: Gams</figcaption>
      </figure>
    </>
  )
};

export default Narava;