import React from "react";
import { decode } from "html-entities";
import { Card, Paragraph } from "react-native-paper";
import { QuestionsFormat } from "../store/quizSlice";

interface QuestionCardProps {
  questions: QuestionsFormat[];
  currentQuestionIndex: number;
}

const QuestionCard = ({
  questions,
  currentQuestionIndex,
}: QuestionCardProps) => (
  <Card>
    <Card.Title title={questions[currentQuestionIndex]?.category} />
    <Card.Content>
      <Paragraph>{decode(questions[currentQuestionIndex]?.question)}</Paragraph>
    </Card.Content>
  </Card>
);

export default QuestionCard;
