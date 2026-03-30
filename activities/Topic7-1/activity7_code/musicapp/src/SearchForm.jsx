import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
  const [inputText, setInputText] = useState('');

  const handleChangeInput = (event) => {
    console.log('Input changed', event.target.value);
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with:', inputText);
    props.onSubmit(inputText);
  };

  return (
    <div className="search-section">
      <div className="search-container">
        <form onSubmit={handleSubmit} className="search-form">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input 
              id="searchInput"
              type="text" 
              className="search-input"
              placeholder="Search albums by title or description..."
              value={inputText}
              onChange={handleChangeInput}
            />
          </div>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        
        {/* Optional: Display search results count if you want to add this feature */}
        {inputText && (
          <div className="results-count">
            Searching for: <span>"{inputText}"</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchForm;