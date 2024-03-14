import './Form.css';
import { useState } from 'react';

const Form = () => {
  const [search, setSearch] = useState('');

  return (
    <form className='search-form'>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='search-bar'
        type='text'
        placeholder='Search for news'
      />
      <button className='search-button' type='submit'>
        Search
      </button>
    </form>
  );
};

export default Form;
