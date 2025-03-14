'use client';
import React from 'react';
import { formatDate } from '@/app/utils/dateFormat';

const NovicaCard = ({ novica, onClick }) => {
  return (
    <div className="card h-full" onClick={onClick}>
      <div className="flex flex-col justify-between align-text-bottom">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {formatDate(novica.datum)}
        </div>
        <h2 className="head-subtitle">{novica.naslov}</h2>
      </div>
      <h3 className="head-description">{novica.povzetek}</h3>
      <p className="text-textColor dark:text-darkOnSurface">
        {novica.vsebina.substring(0, 100)}...
      </p>
    </div>
  );
};

export default NovicaCard;
