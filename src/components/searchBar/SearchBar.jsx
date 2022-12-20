import React, {useState, useCallback} from 'react';
import logo from "../../logo.png";
import './searchBar.css';

const SearchBar = (props) => { 

  const [searchQuery, setSearchQuery] = useState(props.searchQuery);

  const handleChange =(event) =>{
    setSearchQuery(event.target.value);
  }; 

  const handleSubmit = (event) =>{
    event.preventDefault();
    props.searchVideo(searchQuery);
  }; 

  return (
    <>
      <div class="flex-container">     
        <img className="searchBar-logo" src={logo} />
        <div class="searchBar-search">
          <form class="searchBar-search" onChange={handleChange}>
              <input class="searchBar-input" onChange={handleChange}  type="text" value={searchQuery} />
              <button type="submit" class="searchBar-searchButton" onClick={handleSubmit}>
                 <h1>🔍</h1>
              </button>
          </form>
        </div> 
      </div>  
    </>
  );    
}


export default SearchBar;
