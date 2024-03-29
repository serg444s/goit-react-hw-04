import { useState, useEffect } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";
import { fetchImages } from "../SearchBar/searchBar-api";
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
  }, [state]);

  return (
    <div>
      <SearchBar setState={setState} />
      {error && <p>Whoops, something went wrong!</p>}
      {state.images.length > 0 && <ImageGallery data={state} />}

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
