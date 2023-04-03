import axios from "axios";

const api = axios.create({ baseURL: "https://dev-cards.onrender.com/api" });

export const postDeck = (title, description, id) => {
  return api
    .post(`/decks/${id}`, { title, description })
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

export const getUsers = () => {
  return api.get(`/users`).then(({ data }) => {
    return data.users;
  });
};

export const deleteCard = (id) => {
  return api.delete(`/cards/${id}`).then(() => {
    console.log("card deleted in utils");
  });
};
