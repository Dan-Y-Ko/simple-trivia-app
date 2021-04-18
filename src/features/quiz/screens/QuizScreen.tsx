import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import QuizComponent from "../components/QuizComponent";
import LoadingComponent from "../../../ui/components/loading/LoadingComponent";
import ErrorComponent from "../../../ui/components/error/ErrorComponent";
import { useAppDispatch, useAppSelector } from "../../../store";
import { loadQuestionsAsync, selectQuestions } from "../store/quizSlice";

export interface Results {
  question: string;
  correct: boolean;
}

const QuizScreen = (): JSX.Element => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [results, setResults] = useState<Results[] | []>([]);
  const questionsStore = useAppSelector(selectQuestions);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const { loading, questions, error } = questionsStore;

  useEffect(() => {
    dispatch(loadQuestionsAsync());
  }, [dispatch]);

  useEffect(() => {
    if (showScore) {
      navigation.navigate("Results", { score, results });
    }

    return () => setShowScore(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showScore]);

  const handleAnswerPress = (i: number): void => {
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
      setShowScore(true);
    } else {
      setCurrentQuestionIndex((prevState) => prevState + 1);
    }
  };

  if (loading) return <LoadingComponent />;

  return (
    <>
      {error && <ErrorComponent error={error} />}
      {!error && (
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
