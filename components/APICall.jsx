import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import getSomething from "../utils/api";
import React from "react";

const APICall = ({ styleSheet }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getSomething().then((reviews) => {
      setReviews(reviews);
    });
  }, []);

  return (
    <ScrollView>
      {reviews.map((review) => {
        return <Text style={styleSheet}>{review.title}</Text>;
      })}
    </ScrollView>
  );
};

export default APICall;
