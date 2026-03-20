import React from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const AlbumList = (props) => {
  const navigate = useNavigate();

  const handleSelectionOne = (albumId) => {
    console.log('Selected ID is ' + albumId);
    props.onClick(albumId, navigate);
  };

  console.log('props albumList', props);
  
  // Map through albums to create Card components
  const albums = props.albumList && Array.isArray(props.albumList) 
    ? props.albumList.map((album) => {
        return (
          <Card 
            key={album.albumId}
            albumId={album.albumId}
            albumTitle={album.title}
            albumDescription={album.description}
            buttonText='View Details'
            imgURL={album.image}
            onclick={handleSelectionOne}
          />
        );
      })
    : [];
  
  return (
    <div className='container'>
      <div className='row'>
        {albums.length > 0 ? albums : <p className="col-12">No albums found</p>}
      </div>
    </div>
  );
};

export default AlbumList;