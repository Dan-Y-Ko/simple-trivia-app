import React from "react";
import { decode } from "html-entities";
import { Card, Paragraph } from "react-native-paper";

import { QuestionsFormat } from "../store/quizSlice";
import {
  CardContainer,
  CardStyled,
  CardTitle,
} from "./styles/QuestionCardStyles";

interface QuestionCardProps {
  questions: QuestionsFormat[];
  currentQuestionIndex: number;
}

const QuestionCard = ({
  questions,
  currentQuestionIndex,
}: QuestionCardProps) => (
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

export default QuestionCard;
