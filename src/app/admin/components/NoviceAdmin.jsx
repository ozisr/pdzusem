'use client';
import React, { useState, useEffect } from 'react';

const NoviceAdmin = () => {
  const [novice, setNovice] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingNovica, setEditingNovica] = useState(null);
  const [formData, setFormData] = useState({
    naslov: '',
    datum: new Date().toISOString().split('T')[0],
    povzetek: '',
    vsebina: '',
    slika: null
  });

  useEffect(() => {
    fetchNovice();
  }, []);

  useEffect(() => {
    if (editingNovica) {
      setFormData({
        naslov: editingNovica.naslov,
        datum: editingNovica.datum,
        povzetek: editingNovica.povzetek,
        vsebina: editingNovica.vsebina,
        slika: null
      });
      setShowForm(true);
    }
  }, [editingNovica]);

  const fetchNovice = async () => {
    try {
      const response = await fetch('/api/novice');
      const data = await response.json();
      setNovice(data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Ali ste prepričani, da želite izbrisati to novico?')) {
      try {
        const response = await fetch('/api/novice', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id }),
        });

        if (response.ok) {
          await fetchNovice();
          alert('Novica uspešno izbrisana!');
        } else {
          throw new Error('Failed to delete news');
        }
      } catch (error) {
        console.error('Error deleting news:', error);
        alert('Napaka pri brisanju novice.');
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'slika' && files) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null) {
          formDataToSend.append(key, formData[key]);
        }
      });

      if (editingNovica) {
        formDataToSend.append('id', editingNovica.id);
      }

      const response = await fetch('/api/novice', {
        method: editingNovica ? 'PUT' : 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        resetForm();
        await fetchNovice();
        alert(editingNovica ? 'Novica uspešno posodobljena!' : 'Novica uspešno dodana!');
      } else {
        throw new Error(editingNovica ? 'Failed to update news' : 'Failed to add news');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Napaka pri shranjevanju novice.');
    }
  };

  const resetForm = () => {
    setFormData({
      naslov: '',
      datum: new Date().toISOString().split('T')[0],
      povzetek: '',
      vsebina: '',
      slika: null
    });
    setShowForm(false);
    setEditingNovica(null);
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Urejanje novic</h1>
      
      {!showForm && (
        <button 
          onClick={() => setShowForm(true)}
          className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors"
        >
          Dodaj novico
        </button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-4">
          <h2 className="text-xl font-bold mb-4">
            {editingNovica ? 'Uredi novico' : 'Dodaj novo novico'}
          </h2>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="naslov">
              Naslov:
            </label>
            <input
              id="naslov"
              name="naslov"
              type="text"
              value={formData.naslov}
              onChange={handleInputChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="datum">
              Datum:
            </label>
            <input
              id="datum"
              name="datum"
              type="date"
              value={formData.datum}
              onChange={handleInputChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="povzetek">
              Povzetek:
            </label>
            <textarea
              id="povzetek"
              name="povzetek"
              value={formData.povzetek}
              onChange={handleInputChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              rows="3"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="vsebina">
              Vsebina:
            </label>
            <textarea
              id="vsebina"
              name="vsebina"
              value={formData.vsebina}
              onChange={handleInputChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              rows="6"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="slika">
              Slika:
            </label>
            <input
              id="slika"
              name="slika"
              type="file"
              onChange={handleInputChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              accept="image/*"
            />
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
              {editingNovica ? 'Shrani spremembe' : 'Dodaj novico'}
            </button>
          </div>
        </form>
      )}

      {/* Seznam obstoječih novic */}
      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Obstoječe novice</h2>
        {novice.map((novica) => (
          <div key={novica.id} className="border p-4 rounded dark:border-gray-700 relative">
            <div className="absolute top-2 right-2 space-x-2">
              <button
                onClick={() => setEditingNovica(novica)}
                className="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary/90"
              >
                Uredi
              </button>
              <button
                onClick={() => handleDelete(novica.id)}
                className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
              >
                Izbriši
              </button>
            </div>
            <h3 className="font-bold text-lg pr-24">{novica.naslov}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{novica.datum}</p>
            <p className="mt-2">{novica.povzetek}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoviceAdmin; 