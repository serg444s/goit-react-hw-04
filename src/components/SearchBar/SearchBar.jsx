import css from "./SearchBar.module.css";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (evt) => {
    setQuery(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    if (evt.target.elements.query.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    onSearch(query);
    console.log(query, "handleSubmit");
    form.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search images and photos"
          name="query"
          required
          autoFocus
          value={query}
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          <IoSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
