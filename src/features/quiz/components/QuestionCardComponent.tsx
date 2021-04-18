import React from "react";
import { Card } from "react-native-paper";
import { decode } from "html-entities";

import {
  CardContainerStyled,
  CardStyled,
  CardTextContainerStyled,
  CardTextStyled,
} from "./styles/QuestionCardStyles";
import type { QuestionsFormat } from "../store/quizSlice";

interface QuestionCardComponentProps {
  questions: QuestionsFormat[];
  currentQuestionIndex: number;
}

const QuestionCardComponent = ({
  questions,
  currentQuestionIndex,
}: QuestionCardComponentProps): JSX.Element => (
  <CardContainerStyled>
    <CardStyled>
      <Card.Content>
        <CardTextContainerStyled>
          <CardTextStyled>
            {decode(questions[currentQuestionIndex]?.question)}
          </CardTextStyled>
        </CardTextContainerStyled>
      </Card.Content>
    </CardStyled>
  </CardContainerStyled>
);

export default QuestionCardComponent;
