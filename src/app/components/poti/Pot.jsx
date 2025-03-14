import React from 'react';
import Image from 'next/image';

const Pot = ({ pot }) => {
  return (
    <article>
      <h2 className="head-subtitle">{pot.naslov}</h2>
      <div className="flex flex-row justify-between">
        <div>
          <div className="flex flex-row">
            <Image 
            src="/images/icons/potek_poti.svg" 
            alt="Potek poti" 
            width={32} 
            height={32} 
            className="ikone-poti"
            />
            <span className="pt-1">Potek poti: {pot.potekPoti}</span>
          </div>
          <div className="flex flex-row">
            <Image 
            src="/images/icons/visinska_razlika.svg" 
            alt="Višinska razlika" 
            width={32} 
            height={32} 
            className="ikone-poti"
            />
            <span className="pt-1">Višinska razlika: {pot.visinskaRazlika}</span>
          </div>
          <div className="flex flex-row">
            <Image 
            src="/images/icons/dolzina_poti.svg" 
            alt="Dolžina poti" 
            width={32} 
            height={32} 
            className="ikone-poti"
            />
            <span className="pt-1">Dolžina poti: {pot.dolzinaPoti}</span>
          </div>
          <div className="flex flex-row">
            <Image 
            src="/images/icons/cas_hoje.svg" 
            alt="Čas hoje" 
            width={32} 
            height={32} 
            className="ikone-poti"
            />
            <span className="pt-1">Čas hoje: {pot.casHoje}</span>
          </div>
          <div className="flex flex-row">
            <Image 
            src="/images/icons/zahtevnost_poti.svg" 
            alt="Zahtevnost poti" 
            width={32} 
            height={32} 
            className="ikone-poti"
            />
            <span className="pt-1">Zahtevnost poti: {pot.zahtevnostPoti}</span>
          </div>
        </div>
        <div>
          <Image 
          src={pot.imgUrl} 
          alt={pot.naslov} 
          width={200} 
          height={150} 
          className="mr-2"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <Image 
        src="/images/icons/opis_poti.svg" 
        alt="Opis poti" 
        width={32} 
        height={32} 
        className="ikone-poti"
        />
        <span className="pt-1">Opis poti: </span>
      </div>
        <p className="text-textColor dark:text-darkOnSurface">{pot.opisPoti}</p>

      <div className="flex flex-row justify-evenly flex-wrap">
        {[pot.imgUrl2, pot.imgUrl3, pot.imgUrl4].map((img, index) => (
          <Image 
            key={`${pot.id}-image-${index}`}
          src={img}
          alt={`${pot.naslov} - slika ${index + 2}`}
          width={300}
          height={230}
          className="m-1"
        />
      ))}
      </div>
    </article>
  );
};

export default Pot;
