import axios from "axios";

const api = axios.create({ baseURL: "" });

export const postDeck = (name, description) => {
  return api
    .post("/decks", { name, description })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
