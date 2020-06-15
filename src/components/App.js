import React, { useState } from "react";

import unsplashApi from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

const App = () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (searchKey) => {
    const response = await unsplashApi.get("/search/photos", {
      params: { query: searchKey },
    });
    console.log(response.data.results);
    setImages([...response.data.results]);

  };
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
