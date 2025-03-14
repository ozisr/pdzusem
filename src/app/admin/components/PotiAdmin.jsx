'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const PotiAdmin = () => {
  const [poti, setPoti] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPot, setEditingPot] = useState(null);
  const [formData, setFormData] = useState({
    naslov: '',
    potekPoti: '',
    visinskaRazlika: '',
    dolzinaPoti: '',
    casHoje: '',
    zahtevnostPoti: '',
    opisPoti: '',
    imgUrl: null,
    imgUrl2: null,
    imgUrl3: null,
    imgUrl4: null
  });

  useEffect(() => {
    fetchPoti();
  }, []);

  useEffect(() => {
    if (editingPot) {
      setFormData({
        naslov: editingPot.naslov,
        potekPoti: editingPot.potekPoti,
        visinskaRazlika: editingPot.visinskaRazlika,
        dolzinaPoti: editingPot.dolzinaPoti,
        casHoje: editingPot.casHoje,
        zahtevnostPoti: editingPot.zahtevnostPoti,
        opisPoti: editingPot.opisPoti,
        imgUrl: null,
        imgUrl2: null,
        imgUrl3: null,
        imgUrl4: null
      });
      setShowForm(true);
    }
  }, [editingPot]);

  const fetchPoti = async () => {
    try {
      const response = await fetch('/api/poti');
      const data = await response.json();
      setPoti(data);
    } catch (error) {
      console.error('Error fetching paths:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      });

      if (editingPot) {
        formDataToSend.append('id', editingPot.id);
      }

      const response = await fetch('/api/poti', {
        method: editingPot ? 'PUT' : 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        resetForm();
        await fetchPoti();
        alert(editingPot ? 'Pot uspešno posodobljena!' : 'Pot uspešno dodana!');
      } else {
        throw new Error(editingPot ? 'Failed to update path' : 'Failed to add path');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Napaka pri shranjevanju poti.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Ali ste prepričani, da želite izbrisati to pot?')) {
      try {
        const response = await fetch('/api/poti', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id }),
        });

        if (response.ok) {
          await fetchPoti();
          alert('Pot uspešno izbrisana!');
        } else {
          throw new Error('Failed to delete path');
        }
      } catch (error) {
        console.error('Error deleting path:', error);
        alert('Napaka pri brisanju poti.');
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      naslov: '',
      potekPoti: '',
      visinskaRazlika: '',
      dolzinaPoti: '',
      casHoje: '',
      zahtevnostPoti: '',
      opisPoti: '',
      imgUrl: null,
      imgUrl2: null,
      imgUrl3: null,
      imgUrl4: null
    });
    setShowForm(false);
    setEditingPot(null);
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Urejanje poti</h1>
      
      {!showForm && (
        <button 
          onClick={() => setShowForm(true)}
          className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors"
        >
          Dodaj pot
        </button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-4">
          <h2 className="text-xl font-bold mb-4">
            {editingPot ? 'Uredi pot' : 'Dodaj novo pot'}
          </h2>

          <div>
            <label className="block text-sm font-medium mb-2">Naslov:</label>
            <input
              type="text"
              name="naslov"
              value={formData.naslov}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Potek poti:</label>
              <input
                type="text"
                name="potekPoti"
                value={formData.potekPoti}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Višinska razlika:</label>
              <input
                type="text"
                name="visinskaRazlika"
                value={formData.visinskaRazlika}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Dolžina poti:</label>
              <input
                type="text"
                name="dolzinaPoti"
                value={formData.dolzinaPoti}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Čas hoje:</label>
              <input
                type="text"
                name="casHoje"
                value={formData.casHoje}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Zahtevnost poti:</label>
            <select
              name="zahtevnostPoti"
              value={formData.zahtevnostPoti}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Izberi zahtevnost</option>
              <option value="Lahka pot">Lahka pot</option>
              <option value="Zahtevna pot">Zahtevna pot</option>
              <option value="Zelo zahtevna pot">Zelo zahtevna pot</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Opis poti:</label>
            <textarea
              name="opisPoti"
              value={formData.opisPoti}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              rows="6"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Topografska slika:</label>
              <input
                type="file"
                name="imgUrl"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                accept="image/*"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Slika 1:</label>
              <input
                type="file"
                name="imgUrl2"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                accept="image/*"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Slika 2:</label>
              <input
                type="file"
                name="imgUrl3"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                accept="image/*"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Slika 3:</label>
              <input
                type="file"
                name="imgUrl4"
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                accept="image/*"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button 
              type="button" 
              onClick={resetForm}
              className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors"
            >
              Prekliči
            </button>
            <button 
              type="submit"
              className="bg-secondary text-white px-6 py-2 rounded hover:bg-secondary/90 transition-colors"
            >
              {editingPot ? 'Shrani spremembe' : 'Dodaj pot'}
            </button>
          </div>
        </form>
      )}

      {/* Seznam obstoječih poti */}
      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Obstoječe poti</h2>
        {poti.map((pot) => (
          <div key={pot.id} className="border p-4 rounded dark:border-gray-700">
            <div className="flex gap-4 items-start">
              {/* Thumbnail */}
              {pot.imgUrl && (
                <div className="w-24 h-24 flex-shrink-0 relative">
                  <Image
                    src={pot.imgUrl}
                    alt={pot.naslov}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              )}
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">{pot.naslov}</h3>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => setEditingPot(pot)}
                      className="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90"
                    >
                      Uredi
                    </button>
                    <button
                      onClick={() => handleDelete(pot.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                    >
                      Izbriši
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{pot.potekPoti}</p>
                <div className="mt-2 flex gap-4 text-sm">
                  <span className="font-medium">{pot.zahtevnostPoti}</span>
                  <span>|</span>
                  <span>{pot.dolzinaPoti}</span>
                  <span>|</span>
                  <span>{pot.casHoje}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PotiAdmin; 