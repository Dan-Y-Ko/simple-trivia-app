import React from "react";
import { RouteProp } from "@react-navigation/native";

import TextComponent from "../../../ui/components/typography/TextComponent";
import HeaderComponent from "../components/HeaderComponent";
import QuizResultsComponent from "../components/QuizResultsComponent";
import ButtonWrapper from "./styles/ResultsScreenStyles";
import ButtonComponent from "../../../ui/components/button/ButtonComponent";
import colors from "../../../ui/theme/colors";
import space from "../../../ui/theme/spacing";
import type { QuizStackParamList } from "../../../navigation/QuizNavigator";

type ResultsScreenRouteProp = RouteProp<QuizStackParamList, "Results">;

type Props = {
  route: ResultsScreenRouteProp;
};

const ResultsScreen = ({ route }: Props) => {
  const { results, score } = route.params;
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
          onPress={() => null}
          color={colors.brand.primary}
        >
          PLAY AGAIN?
        </ButtonComponent>
      </ButtonWrapper>
    </>
  );
};

export default ResultsScreen;
