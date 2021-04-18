import React from "react";

import AnswerButtonGroupComponent from "./AnswerButtonGroupComponent";
import QuestionCardComponent from "./QuestionCardComponent";
import space from "../../../ui/theme/spacing";
import {
  QuizComponentContainerStyle,
  HeaderComponentStyled,
  TextComponentStyled,
  TitleText,
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
  <>
    <HeaderComponentStyled height={space[2]}>
      <TitleText variant="label">
        {questions[currentQuestionIndex]?.category}
      </TitleText>
    </HeaderComponentStyled>
    <QuizComponentContainerStyle>
      <TextComponentStyled variant="label">
        Question # {currentQuestionIndex + 1} / {questions.length}
      </TextComponentStyled>
      <QuestionCardComponent
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
      />
      <AnswerButtonGroupComponent handleAnswerPress={handleAnswerPress} />
    </QuizComponentContainerStyle>
  </>
);

export default QuizComponent;
