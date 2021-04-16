import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import QuizComponent from "../components/QuizComponent";
import LoadingComponent from "../../../ui/components/loading/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../../store";
import { loadQuestionsAsync, selectQuestions } from "../store/quizSlice";

export interface Results {
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

  const { loading, questions, error } = questionsStore;

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
      navigation.navigate("Results", { score, results });
    } else {
      setCurrentQuestionIndex((prevState) => prevState + 1);
    }
  };

  if (loading) return <LoadingComponent />;

  return (
    <>
      {error ? (
        <Text>Something went wrong</Text>
      ) : (
        <QuizComponent
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          handleAnswerPress={handleAnswerPress}
        />
      )}
    </>
  );
};

export default QuizScreen;
