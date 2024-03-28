const ImageCard = ({ image }) => {
  return (
    <div>
      <img src={image.src} alt={image.description} />
      <p></p>
    </div>
  );
};

export default ImageCard;
