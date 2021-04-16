import React from "react";
import { Text } from "react-native";

import AnswerButtonGroup from "./AnswerButtonGroup";
import QuestionCard from "./QuestionCard";
import QuizComponentContainerStyle from "./styles/QuizComponentStyles";
import { QuestionsFormat } from "../store/quizSlice";

interface QuizComponentProps {
  questions: QuestionsFormat[];
  currentQuestionIndex: number;
  handleAnswerPress: (i: number) => void;
}

const QuizComponent = ({
  questions,
  currentQuestionIndex,
  handleAnswerPress,
}: QuizComponentProps) => (
  <QuizComponentContainerStyle>
    <QuestionCard
      questions={questions}
      currentQuestionIndex={currentQuestionIndex}
    />
    <Text>
      {currentQuestionIndex + 1} / {questions.length}
    </Text>
    <AnswerButtonGroup handleAnswerPress={handleAnswerPress} />
  </QuizComponentContainerStyle>
);

export default QuizComponent;
