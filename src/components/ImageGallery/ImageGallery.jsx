import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul>
        {images.map((image) => {
          return (
            <li key={image.id}>
              <ImageCard image={image} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGallery;
