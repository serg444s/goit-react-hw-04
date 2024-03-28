import css from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <header className={css.header}>
      <form>
        <input
          type="text"
          placeholder="Search images and photos"
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
