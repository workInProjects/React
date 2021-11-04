
import React, { useState } from 'react';
import './Search.css'


const Search = ({ onSearch }) => {
  const [term, setTerm] = useState('');

    function search() {
      onSearch(term)
    };

    function handleKeyPress(event) {
      if(event.key === 'Enter'){
        search()
      }
    }

    function setTermValue(event) {
      setTerm(event.target.value)
    }

    return (
      <div className="search-container">
            <input 
                  type="text"
                  className="form-control search-input"
                  placeholder="type to search"
                  onChange={setTermValue}
                  value={term}
                  onKeyPress={handleKeyPress}    
              />
            <button 
            className="search-bar-btn"
            onClick={search} />
     </div>
    );
    
}


export default Search; 