import React, { useState } from 'react';

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
    <div className="container mt-3 mb-3">
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-auto">
          <label htmlFor="searchInput" className="col-form-label">
            Search Albums:
          </label>
        </div>
        <div className="col-auto">
          <input 
            id="searchInput"
            type="text" 
            className="form-control"
            placeholder="Enter search term..."
            value={inputText}
            onChange={handleChangeInput}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;