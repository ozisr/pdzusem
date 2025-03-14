'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const GalerijaAdmin = () => {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch('/api/galerija');
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    setUploading(true);

    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch('/api/galerija', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to upload image');
        }
      }

      await fetchImages();
      alert('Slike uspešno naložene!');
    } catch (error) {
      console.error('Error uploading images:', error);
      alert('Napaka pri nalaganju slik.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (imageId) => {
    if (window.confirm('Ali ste prepričani, da želite izbrisati to sliko?')) {
      try {
        const response = await fetch('/api/galerija', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: imageId }),
        });

        if (response.ok) {
          await fetchImages();
          alert('Slika uspešno izbrisana!');
        } else {
          throw new Error('Failed to delete image');
        }
      } catch (error) {
        console.error('Error deleting image:', error);
        alert('Napaka pri brisanju slike.');
      }
    }
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Urejanje galerije</h1>

      <div className="mb-8">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="hidden"
          id="image-upload"
          disabled={uploading}
        />
        <label
          htmlFor="image-upload"
          className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors cursor-pointer"
        >
          {uploading ? 'Nalaganje...' : 'Dodaj slike'}
        </label>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative group">
            <Image
              src={image.original}
              alt="Gallery image"
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-48"
            />
            <button
              onClick={() => handleDelete(image.id)}
              className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-sm 
                opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Izbriši
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalerijaAdmin; 