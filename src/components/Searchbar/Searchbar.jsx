import { useState } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default function Searchbar({ onSubmit }) {
  const [searchData, setSearchData] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchData);
    setSearchData('');
    event.currentTarget.reset();
  };

  const handleChange = event => {
    setSearchData(event.currentTarget.value.toLowerCase());
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchForm__button}>
          <span className={s.SearchForm__button__label}>Search</span>
        </button>

        <input
          className={s.SearchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

Searchbar.protoType = {
  onSubmit: PropTypes.func.isRequired,
};
