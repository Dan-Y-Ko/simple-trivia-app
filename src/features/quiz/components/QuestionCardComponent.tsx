import React from "react";
import { Card } from "react-native-paper";
import { decode } from "html-entities";

import { QuestionsFormat } from "../store/quizSlice";
import {
  CardContainer,
  CardStyled,
  CardText,
  CardTitle,
} from "./styles/QuestionCardStyles";

interface QuestionCardComponentProps {
  questions: QuestionsFormat[];
  currentQuestionIndex: number;
}

const QuestionCardComponent = ({
  questions,
  currentQuestionIndex,
}: QuestionCardComponentProps) => (
  <CardContainer>
    <CardStyled>
      <CardTitle title={questions[currentQuestionIndex]?.category} />
      <Card.Content>
        <CardText>{decode(questions[currentQuestionIndex]?.question)}</CardText>
      </Card.Content>
    </CardStyled>
  </CardContainer>
);

export default QuestionCardComponent;
