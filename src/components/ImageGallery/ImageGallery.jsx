import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul className={css.gallery}>
        {images.map((image) => {
          return (
            <li key={image.id} className={css.item}>
              <ImageCard image={image} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGallery;
