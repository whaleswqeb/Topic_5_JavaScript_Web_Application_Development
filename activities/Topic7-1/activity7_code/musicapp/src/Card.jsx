import React from 'react';
import './Card.css';

const Card = (props) => {
  const handleViewClick = (e) => {
    e.stopPropagation();
    console.log('View clicked for ID: ' + props.albumId);
    props.onClick(props.albumId, '/show');
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    console.log('Edit clicked for ID: ' + props.albumId);
    props.onClick(props.albumId, '/edit');
  };

  return (
    <div className="album-card">
      <div className="album-image-container">
        <img 
          src={props.imgURL} 
          className="album-image" 
          alt={props.albumTitle}
        />
        <div className="album-overlay">
          <button className="play-button" onClick={handleViewClick}>
            ▶
          </button>
        </div>
      </div>
      
      <div className="album-content">
        <h5 className="album-title">{props.albumTitle}</h5>
        
        {props.albumArtist && (
          <div className="album-artist">{props.albumArtist}</div>
        )}
        
        {props.albumYear && (
          <div className="album-year">{props.albumYear}</div>
        )}
        
        <p className="album-description">
          {props.albumDescription.length > 120 
            ? props.albumDescription.substring(0, 120) + '...' 
            : props.albumDescription}
        </p>
        
        <div className="card-actions">
          <button 
            className="btn-view" 
            onClick={handleViewClick}
          >
            {props.buttonText || 'View'}
          </button>
          <button 
            className="btn-edit" 
            onClick={handleEditClick}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;