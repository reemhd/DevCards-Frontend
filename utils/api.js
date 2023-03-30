import axios from "axios";

const api = axios.create({ baseURL: "https://dev-cards.onrender.com/api" });

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

export const postCard = (front, back) => {
  return api
    .post("/decks/cards", { front, back })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDecks = () => {
  return api
    .get("/decks")
    .then(({ data }) => {
      return data.decks;
    })
    .catch((err) => {
      console.log(err);
    });
};
