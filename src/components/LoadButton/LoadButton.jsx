import css from "./LoadButton.module.css";

export const LoadButton = ({ onClick }) => {
  return (
    <button className={css.btn} onClick={onClick}>
      Load more
    </button>
  );
};
