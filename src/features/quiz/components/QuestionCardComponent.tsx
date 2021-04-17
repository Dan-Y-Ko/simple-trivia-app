import React from "react";
import { decode } from "html-entities";
import { Card, Paragraph } from "react-native-paper";

import { QuestionsFormat } from "../store/quizSlice";
import {
  CardContainer,
  CardStyled,
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
        <Paragraph>
          {decode(questions[currentQuestionIndex]?.question)}
        </Paragraph>
      </Card.Content>
    </CardStyled>
  </CardContainer>
);

export default QuestionCardComponent;
