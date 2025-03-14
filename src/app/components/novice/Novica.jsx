import React from 'react';
import { formatDate } from '@/app/utils/dateFormat';

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
    </article>
  );
};

export default Novica;
