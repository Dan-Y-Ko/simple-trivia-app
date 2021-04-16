import React from "react";
import { useNavigation } from "@react-navigation/native";

import Text from "../../../ui/components/typography/TextComponent";
import {
  Body,
  QuizButtoWrapper,
  StartQuizButton,
  TitleView,
  TitleText,
} from "./styles/HomeScreenStyles";
import colors from "../../../ui/theme/colors";

const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("Quiz");
  };

  return (
    <>
      <TitleView>
        <TitleText variant="label">Welcome to the Trivia Challenge!</TitleText>
      </TitleView>
      <Body>
        <Text variant="body">
          You will be presented with 10 True or False questions.
        </Text>
        <Text variant="body">Can you score 100%?</Text>
      </Body>
      <QuizButtoWrapper>
        <StartQuizButton
          mode="contained"
          onPress={handleNavigation}
          color={colors.brand.primary}
        >
          BEGIN
        </StartQuizButton>
      </QuizButtoWrapper>
    </>
  );
};

export default HomeScreen;
