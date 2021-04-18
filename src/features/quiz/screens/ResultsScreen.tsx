import React from "react";
import { StackScreenProps } from "@react-navigation/stack";

import TextComponent from "../../../ui/components/typography/TextComponent";
import HeaderComponent from "../components/HeaderComponent";
import QuizResultsComponent from "../components/QuizResultsComponent";
import ButtonWrapper from "./styles/ResultsScreenStyles";
import ButtonComponent from "../../../ui/components/button/ButtonComponent";
import colors from "../../../ui/theme/colors";
import space from "../../../ui/theme/spacing";
import type { QuizStackParamList } from "../../../navigation/QuizNavigator";

type ResultsScreenProps = StackScreenProps<QuizStackParamList, "Results">;

const ResultsScreen = ({ navigation, route }: ResultsScreenProps) => {
  const { results, score } = route.params;

  const handleNavigation = () => {
    navigation.navigate("Home");
  };

  return (
    <>
      <HeaderComponent height={space[2]}>
        <TextComponent variant="label">You scored</TextComponent>
        <TextComponent variant="label">
          {score} / {results.length}
        </TextComponent>
      </HeaderComponent>
      <QuizResultsComponent results={results} />
      <ButtonWrapper>
        <ButtonComponent
          mode="contained"
          onPress={handleNavigation}
          color={colors.brand.primary}
        >
          PLAY AGAIN?
        </ButtonComponent>
      </ButtonWrapper>
    </>
  );
};

export default ResultsScreen;
