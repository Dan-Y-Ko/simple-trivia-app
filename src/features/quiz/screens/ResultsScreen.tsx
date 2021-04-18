import React from "react";
import { StackScreenProps } from "@react-navigation/stack";

import TextComponent from "../../../ui/components/typography/TextComponent";
import HeaderComponent from "../components/HeaderComponent";
import QuizResultsComponent from "../components/QuizResultsComponent";
import ButtonComponent from "../../../ui/components/button/ButtonComponent";
import ButtonWrapperStyled from "./styles/ResultsScreenStyles";
import colors from "../../../ui/theme/colors";
import space from "../../../ui/theme/spacing";
import type { QuizStackParamList } from "../../../navigation/QuizNavigator";

type ResultsScreenProps = StackScreenProps<QuizStackParamList, "Results">;

const ResultsScreen = ({
  navigation,
  route,
}: ResultsScreenProps): JSX.Element => {
  const { results, score } = route.params;

  const handleNavigation = (): void => {
    navigation.popToTop();
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
      <ButtonWrapperStyled>
        <ButtonComponent
          mode="contained"
          onPress={handleNavigation}
          color={colors.brand.primary}
        >
          PLAY AGAIN?
        </ButtonComponent>
      </ButtonWrapperStyled>
    </>
  );
};

export default ResultsScreen;
