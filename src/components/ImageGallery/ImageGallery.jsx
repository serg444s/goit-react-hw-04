import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = (data) => {
  const images = data.data.images;
  console.log(images);
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
