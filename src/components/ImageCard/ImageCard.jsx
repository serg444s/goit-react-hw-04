import css from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  console.log(image);
  return (
    <div
      className={css.thumb}
      style={{ backgroundColor: image.color, borderColor: image.color }}
    >
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.img}
      />
      <p></p>
    </div>
  );
};

export default ImageCard;
