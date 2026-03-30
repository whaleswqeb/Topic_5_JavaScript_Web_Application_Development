import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dataSource from './dataSource';
import './EditAlbum.css';

const EditAlbum = (props) => {
  const album = props.album;
  
  const [albumTitle, setAlbumTitle] = useState(album ? album.title : '');
  const [artist, setArtist] = useState(album ? album.artist : '');
  const [description, setDescription] = useState(album ? album.description : '');
  const [year, setYear] = useState(album ? album.year : '');
  const [image, setImage] = useState(album ? album.image : '');
  
  const navigate = useNavigate();

  const updateTitle = (event) => {
    setAlbumTitle(event.target.value);
  };

  const updateArtist = (event) => {
    setArtist(event.target.value);
  };

  const updateDescription = (event) => {
    setDescription(event.target.value);
  };

  const updateYear = (event) => {
    setYear(event.target.value);
  };

  const updateImage = (event) => {
    setImage(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    console.log("Submitting form");
    
    const editedAlbum = {
      albumId: album ? album.albumId : null,
      title: albumTitle,
      artist: artist,
      description: description,
      year: year,
      image: image,
      tracks: album ? album.tracks : [],
    };
    
    console.log(editedAlbum);
    saveAlbum(editedAlbum);
  };

  const saveAlbum = async (album) => {
    try {
      let response;
      if (album.albumId) {
        response = await dataSource.put('/albums/' + album.albumId, album);
      } else {
        response = await dataSource.post('/albums', album);
      }
      
      console.log('Save response:', response);
      console.log('Response data:', response.data);
      
      if (props.onEditAlbum) {
        props.onEditAlbum(navigate);
      }
    } catch (error) {
      console.error('Error saving album:', error);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  const pageTitle = album ? 'Edit Album' : 'Create New Album';

  return (
    <div className="edit-album-container">
      <div className="edit-album-card">
        <h1 className="edit-album-title">{pageTitle}</h1>
        
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="albumTitle">
              Album Title
            </label>
            <input 
              type="text" 
              className="form-control" 
              id="albumTitle" 
              placeholder="Enter album title (e.g., Thriller)" 
              value={albumTitle} 
              onChange={updateTitle}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="albumArtist">
              Artist
            </label>
            <input 
              type="text" 
              className="form-control" 
              id="albumArtist" 
              placeholder="Enter artist name (e.g., Michael Jackson)" 
              value={artist} 
              onChange={updateArtist}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="albumDescription">
              Description
            </label>
            <textarea 
              className="form-control" 
              id="albumDescription" 
              placeholder="Enter album description..." 
              value={description} 
              onChange={updateDescription}
              rows="4"
              required
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="albumYear">
                Year
              </label>
              <input 
                type="number" 
                className="form-control" 
                id="albumYear" 
                placeholder="e.g., 1982" 
                value={year} 
                onChange={updateYear}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="albumImage">
                Image URL
              </label>
              <input 
                type="text" 
                className="form-control" 
                id="albumImage" 
                placeholder="https://example.com/image.jpg" 
                value={image} 
                onChange={updateImage}
                required
              />
            </div>
          </div>

          {/* Image Preview */}
          {image && (
            <div className="preview-section">
              <div className="preview-title">Image Preview</div>
              <div className="preview-content">
                <img 
                  src={image} 
                  alt="Preview" 
                  className="preview-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/60x60?text=Invalid+URL';
                  }}
                />
                <div className="preview-text">
                  <h4>{albumTitle || 'Album Title'}</h4>
                  <p>{artist || 'Artist Name'}</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="form-actions">
            <button 
              type="button" 
              className="btn-cancel" 
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn-submit"
            >
              {album ? 'Update Album' : 'Create Album'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAlbum;