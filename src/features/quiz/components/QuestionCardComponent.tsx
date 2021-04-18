import React from "react";
import { Card } from "react-native-paper";
import { decode } from "html-entities";

import { QuestionsFormat } from "../store/quizSlice";
import {
  CardContainer,
  CardStyled,
  CardTextContainerStyled,
  CardTextStyled,
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
      <Card.Content>
        <CardTextContainerStyled>
          <CardTextStyled>
            {decode(questions[currentQuestionIndex]?.question)}
          </CardTextStyled>
        </CardTextContainerStyled>
      </Card.Content>
    </CardStyled>
  </CardContainer>
);

export default QuestionCardComponent;
