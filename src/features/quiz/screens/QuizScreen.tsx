import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { decode } from "html-entities";
import { useNavigation } from "@react-navigation/native";

import AnswerButtonGroup from "../components/AnswerButtonGroup";
import { useAppDispatch, useAppSelector } from "../../../store";
import { loadQuestionsAsync, selectQuestions } from "../store/quizSlice";

interface Results {
  question: string;
  correct: boolean;
}

const QuizScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [results, setResults] = useState<Results[] | []>([]);
  const questionsStore = useAppSelector(selectQuestions);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(loadQuestionsAsync());
  }, [dispatch]);

  const handleAnswerPress = (i: number) => {
    let answer;

    if (i === 0) {
      answer = "True";
    } else {
      answer = "False";
    }

    if (
      answer === questionsStore.questions[currentQuestionIndex].correct_answer
    ) {
      setScore((prevState) => prevState + 1);
      setResults([
        ...results,
        {
          question: questionsStore.questions[currentQuestionIndex].question,
          correct: true,
        },
      ]);
    } else {
      setResults([
        ...results,
        {
          question: questionsStore.questions[currentQuestionIndex].question,
          correct: false,
        },
      ]);
    }

    if (currentQuestionIndex + 1 > questionsStore.questions.length - 1) {
      navigation.navigate("Results");
    } else {
      setCurrentQuestionIndex((prevState) => prevState + 1);
    }
  };

  return (
    <>
      {questionsStore.loading ? (
        <Text>Loading</Text>
      ) : (
        <>
          <Text>
            {questionsStore.questions[currentQuestionIndex]?.category}
          </Text>
          <Text>
            {decode(questionsStore.questions[currentQuestionIndex]?.question)}
          </Text>
          <Text>
            {currentQuestionIndex + 1} / {questionsStore.questions.length}
          </Text>
          <AnswerButtonGroup handleAnswerPress={handleAnswerPress} />
        </>
      )}
      <Text>{score}</Text>
    </>
  );
};

export default QuizScreen;
