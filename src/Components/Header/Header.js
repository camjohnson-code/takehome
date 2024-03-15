import './Header.css';
import Form from '../Form/Form';

const Header = ({
  setSearchQuery,
  setHasSearched,
}) => {
  return (
    <header className='header'>
      <h1 className='header-item'>
        <a className='header-link' href='/'>
          News Feed
        </a>
      </h1>
      <Form
        setHasSearched={setHasSearched}
        setSearchQuery={setSearchQuery}
        className='header-item'
      />
    </header>
  );
};

export default Header;
