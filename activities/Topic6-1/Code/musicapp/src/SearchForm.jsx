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
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Search Albums:</label>
          <input 
            type="text" 
            className="form-control"
            placeholder="Enter search term..."
            value={inputText}
            onChange={handleChangeInput}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;