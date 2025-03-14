'use client';

import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Ikona from './Ikona';

const Galerija = () => {
  const [images, setImages] = useState([]);

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

  return (
    <section id="galerija" className="section bg-white">
      <div className="section-container">
        <div className="section-title">
          <h1 className="head-title">
            <Ikona />
            Galerija
          </h1>
          <p className="head-description">Galerija slik</p>
        </div>
        <div className="flex flex-col">
          <figure className="article w-full">
            <ImageGallery
              items={images}
              showThumbnails={true}
              lazyLoad={true}
              additionalClass="custom-gallery"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Galerija;