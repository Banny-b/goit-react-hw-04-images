import { useState } from 'react';
import propTypes from 'prop-types';
import './Searchbar.css';
import { ReactComponent as SearchIcon } from '../../icon/search.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value.toLowerCase().trim());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query === '') {
      toast.error('Enter image name');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit} autoComplete="off">
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder=""
          onChange={handleChange}
          value={query}
        />
        <button type="submit" className="SearchForm-button">
          <SearchIcon />
        </button>
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};