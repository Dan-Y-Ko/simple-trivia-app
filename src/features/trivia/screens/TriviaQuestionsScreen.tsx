import React, { useEffect } from "react";
import { Text } from "react-native";
import { useAppDispatch } from "../../../store";
import { loadQuestionsAsync } from "../triviaSlice";

const TriviaQuestionsScreen = () => {
  // const questions = useAppSelector(selectQuestions);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadQuestionsAsync());
    dispatch({ type: "TESTING" });
  }, [dispatch]);

  return <Text>TriviaQuestionsScreen</Text>;
};
export default TriviaQuestionsScreen;
