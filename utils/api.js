import axios from "axios";

const api = axios.create({ baseURL: "https://dev-cards.onrender.com/api" });

export const postDeck = (title, description) => {
  return api
    .post("/decks", { title, description })
    .then(({ data }) => {
      return data.createdDeck;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postCard = (front, back, newDeckID) => {
  return api
    .post(`/cards/${newDeckID}`, { front, back })
    .then(({ data }) => {
      console.log(data);
      return data.createdCard;
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

export const getDeckByID = (id) => {
  return api.get(`/decks/${id}/cards`).then(({ data }) => {
    return data.cards;
  });
};

export const deleteCard = (id) => {
  return api.delete(`/cards/${id}`).then(() => {
    console.log("card deleted in utils");
  });
};
