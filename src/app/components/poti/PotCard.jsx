'use client';
import React from 'react';
import Image from "next/image";

const PotCard = ( { pot, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="flex justify-center align-text-bottom">
        <h2 className="head-subtitle">{pot.naslov}</h2>
      </div>
      <Image
        key={pot?.id}
        src={pot?.imgUrl}
        alt={`slika ki prikazuje ${pot.naslov}`}
        width={300}
        height={300}
        className="rounded-2xl"
      />
    </div>
  );
};

export default PotCard;