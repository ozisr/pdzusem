import React from 'react';
import { formatDate } from '@/app/utils/dateFormat';
import Image from 'next/image';

const Novica = ({ novica }) => {
  return (
    <article className="article">
      <div className="flex justify-between align-text-bottom">
        <h2 className="head-subtitle">{novica.naslov}</h2>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {formatDate(novica.datum)}
        </div>
      </div>
      <h3 className="head-description">{novica.povzetek}</h3>
      <p className="text-textColor dark:text-darkOnSurface">
        {novica.vsebina}
      </p>
      {/* Pogojno prikaži sliko, če obstaja */}
      {novica.slika && (
        <Image
          src={novica?.slika}
          alt={`Slika za ${novica.naslov}`}
          width={350}
          height={350}
          className="my-4 rounded shadow-md max-w-full h-auto m-auto"
        />
      )}
    </article>
  );
};

export default Novica;
