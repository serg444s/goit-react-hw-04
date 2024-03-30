import axios from "axios";

const API_KEY = "azs8rW0W72OCT-Zd76iLD71_6ahhIu_39FvO7jKHhU0";

export const fetchImages = async ({ page, query }) => {
  axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
  const response = await axios.get(
    `?client_id=${API_KEY}&page=${page}&query=${query}`
  );
  console.log(response.data);
  return response.data;
};

// https://api.unsplash.com/search/photos?client_id=azs8rW0W72OCT-Zd76iLD71_6ahhIu_39FvO7jKHhU0&page=1&query=cat
