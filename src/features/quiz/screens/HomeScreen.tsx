import React from "react";
import { Text } from "react-native";

import {
  Body,
  Title,
  QuizButtoWrapper,
  StartQuizButton,
} from "./styles/HomeScreenStyles";

const HomeScreen = () => (
  <>
    <Title>
      <Text>Welcome to the Trivia Challenge!</Text>
    </Title>
    <Body>
      <Text>You will be presented with 10 True or False questions.</Text>
      <Text>Can you score 100%?</Text>
    </Body>
    <QuizButtoWrapper>
      <StartQuizButton mode="contained" onPress={() => null}>
        BEGIN
      </StartQuizButton>
    </QuizButtoWrapper>
  </>
);

export default HomeScreen;
