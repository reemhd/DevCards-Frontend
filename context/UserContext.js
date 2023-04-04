import React, { useState, createContext, useContext } from "react";
import { useCallback } from "react";
import { getUsers } from "../utils/api";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = useCallback((updatedUser) => {
    setUser(updatedUser);
  }, []);

  useEffect(() => {
    async function getUsers() {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
