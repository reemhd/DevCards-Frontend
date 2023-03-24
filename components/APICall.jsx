import { useEffect, useState } from "react";
import { View, Text } from "react-native";
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
    <View>
      {reviews.map((review) => {
        return <Text key={review.review_id} style={styleSheet}>{review.title}</Text>;
      })}
    </View>
  );
};

export default APICall;
