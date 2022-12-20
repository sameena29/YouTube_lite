import React, { useState } from 'react';

import './homePage.css';

import logo from "../logo.png";

const HomePage = (props) => {
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
       <div className="home-wrap"> 
          <div className="logoImg">    
            <img className="home-logo" src={logo} />
          </div>
          <div className="home-search">
            <form  onChange={handleChange}>
              <div className="home-form">
                <div>
                  <input className="home-input" onChange={handleChange}  type="text" placeholder="What are you looking for?" />
                </div>
                <div> 
                  <button type="submit" className="home-searchButton" onClick={handleSubmit}>
                     <h1>🔍</h1>
                  </button>
                </div> 
              </div> 
            </form>
          </div> 
        </div>  
    </>
	);
}

export default HomePage;