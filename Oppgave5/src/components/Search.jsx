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
      <div id="searchArea" >
        <input type="text" placeholder="SEARCH BY TITLE" onChange={changing}/>
        <button type="button" onClick={handleChange}>SEARCH</button>
      </div>
    </>    
  );
};

export default Search;
