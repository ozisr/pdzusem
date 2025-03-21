'use client'
import React, {useState} from 'react';
import Grad from './Grad';
import Glazuta from './Glazuta';
import Megaliti from './Megaliti';

const Zgodovina = () => {
  const [activeSection, setActiveSection] = useState(null);

  const renderContent = () => {
    switch(activeSection) {
      case 'grad':
        return <Grad />;
      case 'glazuta':
        return <Glazuta />;
      case 'megaliti':
        return <Megaliti />;
      default:
        return '';
    }
  };


  return (
    <>
      <div className="flex justify-evenly mt-3 mb-6">
        <button 
          onClick={() => setActiveSection('grad')}
          className="text-left px-4 py-2 rounded transition-colors bg-primary text-white hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-700 dark:hover:text-gray-100">
          Grad
        </button>
        <button 
          onClick={() => setActiveSection('glazuta')}
          className="text-left px-4 py-2 rounded transition-colors bg-primary text-white hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-700 dark:hover:text-gray-100">
          Glažuta
        </button>
        <button 
          onClick={() => setActiveSection('megaliti')}
          className="text-left px-4 py-2 rounded transition-colors bg-primary text-white hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-700 dark:hover:text-gray-100">
          Megaliti
        </button>
      </div>
      {renderContent()}
    </>
  )
};

export default Zgodovina;