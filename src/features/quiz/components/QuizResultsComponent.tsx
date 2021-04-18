import React from "react";
import { ScrollView } from "react-native";
import { decode } from "html-entities";

import {
  CardStyled,
  CardTitleStyled,
  CardContentStyled,
  IconStyled,
  CardTextStyled,
} from "./styles/QuizResultsStyles";
import type { Results } from "../screens/QuizScreen";

interface QuizResultsComponentProps {
  results: Results[];
}

const QuizResultsComponent = ({
  results,
}: QuizResultsComponentProps): JSX.Element => {
  const renderIcon = (result: Results): JSX.Element =>
    result.correct ? (
      <IconStyled name="check-circle" size={24} correct />
    ) : (
      <IconStyled name="close-box" size={24} />
    );

  const randomIndex = Math.floor(Math.random() * 50);

  return (
    <ScrollView>
      {results.map((result, i) => (
        <CardStyled key={`${result.question}-${randomIndex}`}>
          <CardTitleStyled title={`Question # ${i + 1}`} />
          <CardContentStyled>
            {renderIcon(result)}
            <CardTextStyled>{decode(result.question)}</CardTextStyled>
          </CardContentStyled>
        </CardStyled>
      ))}
    </ScrollView>
  );
};

export default QuizResultsComponent;
