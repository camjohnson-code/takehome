import './Header.css';
import Form from '../Form/Form';

const Header = ({ setHasSearched, setError }) => {
  return (
    <header className='header'>
      <h1 className='header-item'>News Feed</h1>
      <Form
        setHasSearched={setHasSearched}
        setError={setError}
        className='header-item'
      />
    </header>
  );
};

export default Header;
