import { useState, useEffect } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";
import { fetchImagesWithTopic } from "../SearchBar/searchBar-api";
import { Hourglass } from "react-loader-spinner";

function App() {
  const [state, setState] = useState({
    query: "",
    images: [],
    page: 1,
  });

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleSearch = async (topic) => {
      async function fetchImages() {
        try {
          setError(false);
          setLoading(true);
          const data = await fetchImagesWithTopic(topic);
          setState({ ...state, images: { data } });
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }
      fetchImages();
    };
  }, [state]);

  return (
    <div>
      <SearchBar setState={setState} />
      {error && (
        <p style={{ fontSize: 20 }}>
          Whoops, something went wrong! Please try reloading this page!
        </p>
      )}
      {state.images.length > 0 && (
        <ImageGallery images={state.images} setInputValue={setState} />
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
    </div>
  );
}

export default App;
