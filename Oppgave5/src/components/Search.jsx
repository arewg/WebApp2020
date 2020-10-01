import React, { useState } from 'react';

const Search = ({ addResult }) => {

  const [search, setSearch] = useState('');
  const handleChange = () => {
      addResult(search); 
     
  }

  const changing = (e) => {
    setSearch(e.target.value)
  }

  return (
  <>
      <label>Søk: </label>
      <input
        type="text"
        placeholder="Tittel"
        onChange={changing}
      />
      <button type="button" onClick={handleChange}>Search</button>
      </>
  );
};

export default Search;
