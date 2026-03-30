import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SearchAlbum from "./SearchAlbum";
import NavBar from "./Navbar";
import EditAlbum from "./EditAlbum"; 
import OneAlbum from "./OneAlbum";
import "./App.css";
import dataSource from "./dataSource";

const App = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [albumList, setAlbumList] = useState([]);
  const [currentlySelectedAlbumId, setCurrentlySelectedAlbumId] = useState(0);
  let refresh = false;

  const loadAlbums = async () => {
    try {
      const response = await dataSource.get("/albums");
      console.log("API Response:", response.data);

      if (
        response.data &&
        response.data.albums &&
        Array.isArray(response.data.albums)
      ) {
        setAlbumList(response.data.albums);
      } else {
        console.error("Unexpected data format:", response.data);
        setAlbumList([]);
      }
    } catch (error) {
      console.error("Error loading albums:", error);
      setAlbumList([]);
    }
  };

  useEffect(() => {
    loadAlbums();
  }, [refresh]);

  const updateSearchResults = async (phrase) => {
    console.log("phrase is " + phrase);
    setSearchPhrase(phrase);
  };

  const updateSingleAlbum = (id, navigate, uri) => {
    console.log("Update Single Album = ", id);
    console.log("Update Single Album = ", navigate);

    const index = albumList.findIndex((album) => album.albumId === id);

    if (index !== -1) {
      setCurrentlySelectedAlbumId(index);
      let path = uri + "/" + index;
      console.log("path", path);
      navigate(path);
    } else {
      console.error("Album not found with id:", id);
    }
  };

  const onEditAlbum = (navigate) => {
    loadAlbums();
    navigate("/");
  };

  console.log("albumList", albumList);

  const renderedList = albumList.filter((album) => {
    if (searchPhrase === "") return true;
    return album.description.toLowerCase().includes(searchPhrase.toLowerCase());
  });

  console.log("renderedList", renderedList);

  const selectedAlbum = albumList[currentlySelectedAlbumId] || null;

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <SearchAlbum
              albumList={renderedList}
              onSubmit={updateSearchResults}
              onClick={updateSingleAlbum}
            />
          }
        />
        <Route
          exact
          path="/new"
          element={<EditAlbum onEditAlbum={onEditAlbum} />}
        />
        <Route
          exact
          path="/edit/:albumId"
          element={
            <EditAlbum album={selectedAlbum} onEditAlbum={onEditAlbum} />
          }
        />
        <Route
          exact
          path="/show/:albumId"
          element={<OneAlbum album={selectedAlbum} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
