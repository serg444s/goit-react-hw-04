const ImageCard = ({ image }) => {
  return (
    <>
      <img src={image.src} alt={image.description} />
      <p></p>
    </>
  );
};

export default ImageCard;
