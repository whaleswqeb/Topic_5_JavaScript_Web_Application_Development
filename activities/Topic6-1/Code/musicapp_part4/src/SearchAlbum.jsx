import React from 'react';
import SearchForm from './SearchForm';
import AlbumList from './AlbumList';

const SearchAlbum = (props) => {
  return (
    <div>
      <SearchForm onSubmit={props.onSubmit} />
      <AlbumList 
        albumList={props.albumList} 
        onClick={props.onClick}
      />
    </div>
  );
};

export default SearchAlbum;