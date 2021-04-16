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

const HomeScreen = () => {
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
        <StartQuizButton mode="contained" onPress={handleNavigation}>
          BEGIN
        </StartQuizButton>
      </QuizButtoWrapper>
    </>
  );
};

export default HomeScreen;
