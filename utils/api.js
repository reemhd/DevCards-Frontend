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
      throw { err };
    });
};

export const getDeckByID = (id) => {
  return api
    .get(`/decks/${id}/cards`)
    .then(({ data }) => {
      return data.cards;
    })
    .catch((err) => {
      throw { err };
    });
};

export const getUsers = () => {
  return api.get(`/users`).then(({ data }) => {
    return data.users;
  });
};

export const deleteCard = (id) => {
  return api.delete(`/cards/${id}`);
};

export const patchUserPercent = (percent, id) => {
  return api
    .patch(`/decks/${id}/user-percent`, { user_percent: percent })
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
