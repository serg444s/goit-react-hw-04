import css from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ setState }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    console.log(evt.target.elements.query.value);
    if (evt.target.elements.query.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    setState({
      query: evt.target.elements.query.value,
      images: [],
      page: 1,
    });
    form.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search images and photos"
          name="query"
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
