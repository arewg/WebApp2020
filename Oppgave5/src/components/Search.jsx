import React, { useState } from 'react';

const Search = ({ search, handleSearch }) => {

  const handleChange = (event) => {
      handleSearch(event);
      console.log("Inni handleChange");
  }

  return (
    <form id="search">
      <label htmlFor="search">Søk: </label>
      <input
        type="text"
        id="search"
        placeholder="Todo: Tittel"
        onChange={handleChange}
        value={search}
      />
    </form>
  );
};
export default Search;
