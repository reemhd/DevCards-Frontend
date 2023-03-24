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
        return (
          <Text style={styleSheet}>
            {review.title} key={review.review_id}
          </Text>
        );
      })}
    </View>
  );
};

export default APICall;
