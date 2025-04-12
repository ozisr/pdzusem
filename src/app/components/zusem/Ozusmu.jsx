'use client'
import React, {useState} from 'react';
import Geografija from './Geografija';
import Geologija from './Geologija';
import Dediscina from './Dediscina';
import Industrija from './Industrija';
import Narava from './Narava';

const Ozusmu = () => {
  const [activeSection, setActiveSection] = useState(null);

  const renderContent = () => {
    switch(activeSection) {
      case 'geografija':
        return <Geografija />;
      case 'geologija':
        return <Geologija />;
      case 'dediscina':
        return <Dediscina />;
      case 'industrija':
        return <Industrija />;
      case 'narava':
        return <Narava />;
      default:
        return '';
    }
  };


  return (
    <>
      <div className="flex justify-evenly mt-3 mb-6">
        <button 
          onClick={() => setActiveSection('geografija')}
          className="text-left px-4 py-2 rounded transition-colors bg-primary text-white hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-700 dark:hover:text-gray-100">
          Geografija
        </button>
        <button 
          onClick={() => setActiveSection('geologija')}
          className="text-left px-4 py-2 rounded transition-colors bg-primary text-white hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-700 dark:hover:text-gray-100">
          Geologija
        </button>
        <button 
          onClick={() => setActiveSection('dediscina')}
          className="text-left px-4 py-2 rounded transition-colors bg-primary text-white hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-700 dark:hover:text-gray-100">
          Dediščina
        </button>
        <button 
          onClick={() => setActiveSection('industrija')}
          className="text-left px-4 py-2 rounded transition-colors bg-primary text-white hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-700 dark:hover:text-gray-100">
          Industrija in kmetijstvo
        </button>
        <button 
          onClick={() => setActiveSection('narava')}
          className="text-left px-4 py-2 rounded transition-colors bg-primary text-white hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-700 dark:hover:text-gray-100">
          Naravne značilnosti
        </button>
      </div>
      {renderContent()}
    </>
  )
};

export default Ozusmu;