const ImageCard = (image) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
      <p></p>
    </div>
  );
};

export default ImageCard;
