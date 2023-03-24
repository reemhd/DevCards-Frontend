import axios from "axios";

const getSomething = () => {
  const myAPI = axios.create({
    baseURL: "https://backend-project-nc-games.onrender.com/api",
  });
  return myAPI.get("/reviews").then((data) => {
    return data.data.reviews;
  });
};

export default getSomething;
