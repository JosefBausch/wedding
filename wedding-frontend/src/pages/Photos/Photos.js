import React, { useState, useEffect } from 'react';
import './Photos.scss';

const Photos = () => {
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null); // Index of the selected image
  const [isViewerOpen, setIsViewerOpen] = useState(false); // State for image viewer

  useEffect(() => {
    const imageUrls = Array.from({ length: 9 }, (_, index) => ({
      id: index,
      url: `https://picsum.photos/400/300?random=${index}`
    }));
    setImages(imageUrls);
  }, []);

  useEffect(() => {
    if (isViewerOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isViewerOpen]);

  const openImageViewer = (index) => {
    setSelectedImageIndex(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsViewerOpen(false);
    setSelectedImageIndex(null);
  };

  const showPreviousImage = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container">
      <div className={`overlay ${isViewerOpen ? 'active' : ''}`}></div>
      <div className="image-grid">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="image-item"
            onClick={() => openImageViewer(index)}
          >
            <img src={image.url} alt={`Random ${image.id}`} />
          </div>
        ))}
      </div>

      {/* Image Viewer Modal */}
      {isViewerOpen && (
        <>
          <div className="secondary-overlay" onClick={closeImageViewer}></div> {/* Secondary overlay for closing viewer */}
          <div className="image-viewer">
            <span className="close" onClick={closeImageViewer}>&times;</span>
            <button className="prev-button" onClick={showPreviousImage}>❮</button>
            <img src={images[selectedImageIndex].url} alt={`Random ${selectedImageIndex}`} className="viewer-img" />
            <button className="next-button" onClick={showNextImage}>❯</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Photos;
