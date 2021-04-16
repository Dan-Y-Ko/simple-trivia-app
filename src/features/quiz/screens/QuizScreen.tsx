import React, { useState, useEffect } from "react";
import { Text, Button } from "react-native";
import { decode } from "html-entities";
import { useNavigation } from "@react-navigation/native";

import { useAppDispatch, useAppSelector } from "../../../store";
import { loadQuestionsAsync, selectQuestions } from "../quizSlice";

interface Results {
  question: string;
  correct: boolean;
}

const QuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [results, setResults] = useState<Results[] | []>([]);
  const questionsStore = useAppSelector(selectQuestions);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const ButtonArray = ["True", "False"];

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

    if (answer === questionsStore.questions[currentQuestion].correct_answer) {
      setScore((prevState) => prevState + 1);
      setResults([
        ...results,
        {
          question: questionsStore.questions[currentQuestion].question,
          correct: true,
        },
      ]);
    } else {
      setResults([
        ...results,
        {
          question: questionsStore.questions[currentQuestion].question,
          correct: false,
        },
      ]);
    }

    if (currentQuestion + 1 > questionsStore.questions.length - 1) {
      navigation.navigate("Results");
    } else {
      setCurrentQuestion((prevState) => prevState + 1);
    }
  };

  return (
    <>
      {questionsStore.loading ? (
        <Text>Loading</Text>
      ) : (
        <>
          <Text>{questionsStore.questions[currentQuestion]?.category}</Text>
          <Text>
            {decode(questionsStore.questions[currentQuestion]?.question)}
          </Text>
          <Text>
            {currentQuestion + 1} / {questionsStore.questions.length}
          </Text>
          {ButtonArray.map((button, i) => (
            <Button
              key={button}
              title={button}
              onPress={() => handleAnswerPress(i)}
            />
          ))}
          {score}
        </>
      )}
    </>
  );
};

export default QuizScreen;
