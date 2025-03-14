import React from 'react';
import Image from 'next/image';

const Ikona = () => {
  return (
    <Image 
      src="/images/icons/markacija_srce.png" 
      alt="ikona markacije"
      width={30}
      height={30} 
      style={{ objectFit: 'contain' }}
    />
  );
};

export default Ikona;