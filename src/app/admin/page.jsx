'use client';
import React, { useState } from 'react';
import NoviceAdmin from './components/NoviceAdmin';
import PotiAdmin from './components/PotiAdmin';
import GalerijaAdmin from './components/GalerijaAdmin';
import PovezaveAdmin from './components/PovezaveAdmin';

const AdminPage = () => {
  const [activeSection, setActiveSection] = useState('novice');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === 'stolpljubezni') {
      setIsAuthenticated(true);
    } else {
      alert('Napačno geslo!');
    }
  };

  const renderContent = () => {
    switch(activeSection) {
      case 'novice':
        return <NoviceAdmin />;
      case 'poti':
        return <PotiAdmin />;
      case 'galerija':
        return <GalerijaAdmin />;
      case 'povezave':
        return <PovezaveAdmin />;
      default:
        return <NoviceAdmin />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900" >
      {/* Levi meni */}
      <div className="w-64 bg-white dark:bg-gray-800 shadow-lg flex flex-col justify-stretch">
        <div className="p-4">
          <h2 className="text-xl font-bold text-primary dark:text-darkPrimary mb-8">
            Admin Panel
          </h2>
          <nav className="space-y-2">
            <button
              onClick={() => setActiveSection('novice')}
              className={`w-full text-left px-4 py-2 rounded transition-colors ${
                activeSection === 'novice'
                  ? 'bg-primary text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Novice
            </button>
            <button
              onClick={() => setActiveSection('poti')}
              className={`w-full text-left px-4 py-2 rounded transition-colors ${
                activeSection === 'poti'
                  ? 'bg-primary text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Poti
            </button>
            <button
              onClick={() => setActiveSection('galerija')}
              className={`w-full text-left px-4 py-2 rounded transition-colors ${
                activeSection === 'galerija'
                  ? 'bg-primary text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Galerija
            </button>
            <button
              onClick={() => setActiveSection('povezave')}
              className={`w-full text-left px-4 py-2 rounded transition-colors ${
                activeSection === 'povezave'
                  ? 'bg-primary text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Uporabne povezave
            </button>
          </nav>
        </div>
          <a href="/" className="text-left px-4 py-2 m-4 rounded transition-colors hover:bg-gray-100 dark:hover:bg-gray-700">
            Nazaj na glavno stran
          </a>
      </div>

      {/* Desna vsebina */}
      <div className="flex-1 p-8">
        {!isAuthenticated ? (
          <form onSubmit={handlePasswordSubmit} className="flex flex-col">
            <label htmlFor="password" className="mb-2">Vnesite geslo:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 mb-4"
              required
            />
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
              Vstopi
            </button>
          </form>
        ) : (
          renderContent()
        )}
      </div>
    </div>
  );
};

export default AdminPage; 