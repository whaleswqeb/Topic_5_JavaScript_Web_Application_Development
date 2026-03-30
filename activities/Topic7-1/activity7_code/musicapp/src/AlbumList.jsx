import React from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import './AlbumList.css';

const AlbumList = (props) => {
  const navigate = useNavigate();

  const handleSelectionOne = (albumId, uri) => {
    console.log('Selected ID is ' + albumId);
    props.onClick(albumId, navigate, uri);
  };

  console.log('props albumList', props);
  
  const albums = props.albumList && Array.isArray(props.albumList) 
    ? props.albumList.map((album) => {
        return (
          <Card 
            key={album.albumId}
            albumId={album.albumId}
            albumTitle={album.title}
            albumArtist={album.artist}
            albumYear={album.year}
            albumDescription={album.description}
            buttonText='View'
            imgURL={album.image}
            onClick={handleSelectionOne}
          />
        );
      })
    : [];
  
  return (
    <div className='album-list-container'>
      {albums.length > 0 ? (
        <div className='album-grid'>
          {albums}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-state-icon">🎵</div>
          <h3 className="empty-state-title">No albums found</h3>
          <p className="empty-state-text">Try adjusting your search or add a new album</p>
        </div>
      )}
    </div>
  );
};

export default AlbumList;