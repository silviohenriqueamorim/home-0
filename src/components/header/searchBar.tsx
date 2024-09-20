import React from 'react';
import './searchBar.css'; // Importa o CSS específico para este componente

const SearchBar = () => {
  return (
    <form className="form-inline ml-auto flex-grow-1 scroll-container formi" style={{ paddingLeft: "10px" }}>
      <input className="searchBar form-control w-100" type="text" placeholder="Search" />
    </form>
  );
};

export default SearchBar;
