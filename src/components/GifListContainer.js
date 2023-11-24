import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("dolphin");
  const API_KEY = "6pJoiprQPMZRnhFmY5SMK2MIH2pTKcHr";

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${API_KEY}&rating=g`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data from Giphy API");
        }

        const data = await response.json();
        setGifs(data.data.slice(0, 3)); // Store the first 3 gifs in the state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchGifs();
  }, [searchQuery]);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <GifSearch onSearchSubmit={handleSearchSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;