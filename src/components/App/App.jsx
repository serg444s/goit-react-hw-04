import { useState, useEffect } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import { Hourglass } from "react-loader-spinner";
import { fetchImages } from "../../photo-api";
import "./App.css";
import { LoadButton } from "../LoadButton/LoadButton";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState("");
  const [alt, setAlt] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImages(page, query);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setIsVisible(page < data.total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, query]);

  const onHandleSubmit = (value) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(false);
    setIsVisible(false);
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (obj) => {
    setShowModal(true);
    setAlt(obj.alt_description);
    setUrl(obj.urls.regular);
    setDescription(obj.description);
  };

  const closeModal = () => {
    setShowModal(false);
    setAlt("");
    setUrl("");
    setDescription("");
  };

  return (
    <>
      <SearchBar onSearch={onHandleSubmit} />
      {error && <p>Whoops, something went wrong!</p>}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isVisible && !loading && (
        <LoadButton onClick={onLoadMore} loading={loading} />
      )}
      {loading && (
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      )}
      <ImageModal
        url={url}
        alt={alt}
        description={description}
        modalIsOpen={showModal}
        closeModal={closeModal}
      />
    </>
  );
}

export default App;
