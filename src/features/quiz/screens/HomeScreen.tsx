import React from "react";
import { View, Text } from "react-native";

import SafeArea from "../../../ui/components/utility/SafeAreaBase";
import {
  Body,
  Title,
  QuizButtoWrapper,
  StartQuizButton,
} from "./styles/HomeScreenStyles";

const HomeScreen = () => (
  <SafeArea>
    <Title>
      <Text>Welcome to the Trivia Challenge!</Text>
    </Title>
    <Body>
      <Text>You will be presented with 10 True or False questions.</Text>
      <Text>Can you score 100%?</Text>
    </Body>
    <QuizButtoWrapper>
      <StartQuizButton mode="contained" onPress={() => console.log("pressed")}>
        BEGIN
      </StartQuizButton>
    </QuizButtoWrapper>
  </SafeArea>
);

export default HomeScreen;
