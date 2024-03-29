import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/photos";
const API_KEY = "azs8rW0W72OCT-Zd76iLD71_6ahhIu_39FvO7jKHhU0";

export const fetchImagesWithTopic = async (topic) => {
  const response = await axios.get(`/?client_id=${API_KEY}`);
  return response.data;
};
