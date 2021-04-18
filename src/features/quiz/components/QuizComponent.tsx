import React from "react";

import AnswerButtonGroupComponent from "./AnswerButtonGroupComponent";
import QuestionCardComponent from "./QuestionCardComponent";
import space from "../../../ui/theme/spacing";
import {
  HeaderComponentStyled,
  TitleTextStyled,
  QuizComponentContainerStyled,
  TextComponentStyled,
} from "./styles/QuizComponentStyles";
import type { QuestionsFormat } from "../store/quizSlice";

interface QuizComponentProps {
  questions: QuestionsFormat[];
  currentQuestionIndex: number;
  handleAnswerPress: (i: number) => void;
}

const QuizComponent = ({
  questions,
  currentQuestionIndex,
  handleAnswerPress,
}: QuizComponentProps): JSX.Element => (
  <>
    <HeaderComponentStyled height={space[3]}>
      <TitleTextStyled variant="label">
        {questions[currentQuestionIndex]?.category}
      </TitleTextStyled>
    </HeaderComponentStyled>
    <QuizComponentContainerStyled>
      <TextComponentStyled variant="label">
        Question # {currentQuestionIndex + 1} / {questions.length}
      </TextComponentStyled>
      <QuestionCardComponent
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
      />
      <AnswerButtonGroupComponent handleAnswerPress={handleAnswerPress} />
    </QuizComponentContainerStyled>
  </>
);

export default QuizComponent;
