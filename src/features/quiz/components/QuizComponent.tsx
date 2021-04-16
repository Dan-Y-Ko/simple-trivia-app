import React from "react";

import AnswerButtonGroup from "./AnswerButtonGroup";
import QuestionCard from "./QuestionCard";
import {
  QuizComponentContainerStyle,
  TextComponentStyled,
} from "./styles/QuizComponentStyles";
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
    <TextComponentStyled variant="label">
      Question # {currentQuestionIndex + 1} / {questions.length}
    </TextComponentStyled>
    <QuestionCard
      questions={questions}
      currentQuestionIndex={currentQuestionIndex}
    />
    <AnswerButtonGroup handleAnswerPress={handleAnswerPress} />
  </QuizComponentContainerStyle>
);

export default QuizComponent;
