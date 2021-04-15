import React, { useEffect } from "react";
import { Text } from "react-native";
import { useAppDispatch } from "../../../store";
import { loadQuestionsAsync } from "../quizSlice";

const QuizScreen = () => {
  // const questions = useAppSelector(selectQuestions);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadQuestionsAsync());
    dispatch({ type: "TESTING" });
  }, [dispatch]);

  return <Text>QuizScreen</Text>;
};
export default QuizScreen;
