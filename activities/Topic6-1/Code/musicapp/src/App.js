import React, { useState, useEffect } from "react";
import Card from "./Card";
import SearchForm from "./SearchForm"; // Add import
import albums from "./albums.json";
import "./App.css";

const App = () => {
  const [albumList, setAlbumList] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    setAlbumList(albums);
  }, []);


  const updateSearchResults = (phrase) => {
    console.log("Search phrase received:", phrase);
    setSearchPhrase(phrase);
  };


  const filteredAlbums = albumList.filter((album) => {
    if (searchPhrase === "") return true;
    return album.description.toLowerCase().includes(searchPhrase.toLowerCase());
  });

  const renderedList = filteredAlbums.map((album) => {
    return (
      <Card
        key={album.artistId}
        albumId={album.artistId}
        albumTitle={album.title}
        albumDescription={album.description}
        
        buttonText="OK"
        imgURL={album.image}
      />
    );
  });

  return (
    <div className="App">
      <SearchForm onSubmit={updateSearchResults} />
      <div className="container">
        <div className="row">{renderedList}</div>
      </div>
    </div>
  );
};

export default App;
