import './Form.css';
import { useState } from 'react';

const Form = ({ setSearchQuery, setHasSearched }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchValue);
    setHasSearched(true);
  };

  return (
    <form className='search-form'>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className='search-bar'
        type='text'
        placeholder='Search for news'
      />
      <button onClick={handleSearch} className='search-button' type='submit'>
        Search
      </button>
    </form>
  );
};

export default Form;
