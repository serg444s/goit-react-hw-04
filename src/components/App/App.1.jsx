import { useState, useEffect } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import { fetchImages } from "../../photo-api";
import { Hourglass } from "react-loader-spinner";

export function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch() {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImages(state);

        setState(() => {
          return {
            ...state,
            images: [...data],
          };
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, []);

  return (
    <div>
      <SearchBar onSearch={setQuery} />
      {error && <p>Whoops, something went wrong!</p>}
      {images.length > 0 && <ImageGallery images={images} />}

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
    </div>
  );
}
