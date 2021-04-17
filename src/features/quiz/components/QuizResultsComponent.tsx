import React from "react";
import { ScrollView } from "react-native";

import TextStyled from "./styles/QuizResultsStyles";
import type { Results } from "../screens/QuizScreen";

interface QuizResultsComponentProps {
  results: Results[];
}

const QuizResultsComponent = ({ results }: QuizResultsComponentProps) => (
  <ScrollView>
    {results.map((result) => (
      <TextStyled key={result.question}>{result.question}</TextStyled>
    ))}
  </ScrollView>
);

export default QuizResultsComponent;
