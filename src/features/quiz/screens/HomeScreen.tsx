import React from "react";
import { useNavigation } from "@react-navigation/native";

import HeaderComponent from "../components/HeaderComponent";
import Text from "../../../ui/components/typography/TextComponent";
import colors from "../../../ui/theme/colors";
import {
  TitleTextStyled,
  BodyStyled,
  QuizButtoWrapperStyled,
  StartQuizButtonStyled,
} from "./styles/HomeScreenStyles";

const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation();

  const handleNavigation = (): void => {
    navigation.navigate("Quiz");
  };

  return (
    <>
      <HeaderComponent height="33%">
        <TitleTextStyled variant="label">
          Welcome to the Trivia Challenge!
        </TitleTextStyled>
      </HeaderComponent>
      <BodyStyled>
        <Text variant="body">
          You will be presented with 10 True or False questions.
        </Text>
        <Text variant="body">Can you score 100%?</Text>
      </BodyStyled>
      <QuizButtoWrapperStyled>
        <StartQuizButtonStyled
          mode="contained"
          onPress={handleNavigation}
          color={colors.brand.primary}
        >
          BEGIN
        </StartQuizButtonStyled>
      </QuizButtoWrapperStyled>
    </>
  );
};

export default HomeScreen;
