'use client'
import React, {useState} from 'react';
import Casovnica from './Casovnica';
import Tehnicnipodatki from './Tehnicnipodatki';
import Simbolika from './Simbolika';
import Okolica from './Okolica';

const Ostolpu = () => {
  const [activeSection, setActiveSection] = useState(null);

  const renderContent = () => {
    switch(activeSection) {
      case 'casovnica':
        return <Casovnica />;
      case 'tehnicnipodatki':
        return <Tehnicnipodatki />;
      case 'simbolika':
        return <Simbolika />;
      case 'okolica':
        return <Okolica />;
      default:
        return '';
    }
  };


  return (
    <>
      <div className="flex justify-evenly mt-3 mb-6">
        <button 
          onClick={() => setActiveSection('casovnica')}
          className="text-left px-4 py-2 rounded transition-colors bg-primary text-white hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-700 dark:hover:text-gray-100">
          Časovnica
        </button>
        <button 
          onClick={() => setActiveSection('tehnicnipodatki')}
          className="text-left px-4 py-2 rounded transition-colors bg-primary text-white hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-700 dark:hover:text-gray-100">
          Tehnični podatki
        </button>
        <button 
          onClick={() => setActiveSection('simbolika')}
          className="text-left px-4 py-2 rounded transition-colors bg-primary text-white hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-700 dark:hover:text-gray-100">
          Simbolika
        </button>
        <button 
          onClick={() => setActiveSection('okolica')}
          className="text-left px-4 py-2 rounded transition-colors bg-primary text-white hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-700 dark:hover:text-gray-100">
          Okolica
        </button>
      </div>
      {renderContent()}
    </>
  )
};

export default Ostolpu;