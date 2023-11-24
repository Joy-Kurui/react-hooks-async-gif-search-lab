import React, { useState } from "react";

function GifSearch({ onSearchSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Invoke the callback prop with the search term
    onSearchSubmit(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search Gifs:
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default GifSearch;