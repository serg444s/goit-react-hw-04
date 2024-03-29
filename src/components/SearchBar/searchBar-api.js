import axios from "axios";

export const fetchImages = async ({ page, query }) => {
  axios.defaults.baseURL = "https://api.unsplash.com/photos";
  // const API_KEY = "azs8rW0W72OCT-Zd76iLD71_6ahhIu_39FvO7jKHhU0";
  const response = await axios.get(
    `?client_id=azs8rW0W72OCT-Zd76iLD71_6ahhIu_39FvO7jKHhU0&page=${page}&query=${query}`
  );
  return response.data;
};
