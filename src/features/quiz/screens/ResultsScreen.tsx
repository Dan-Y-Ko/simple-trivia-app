import React from "react";
import { View, Text, ScrollView } from "react-native";
import { RouteProp } from "@react-navigation/native";

import TextComponent from "../../../ui/components/typography/TextComponent";
import ScoreContainer from "./styles/ResultsScreenStyles";
import type { QuizStackParamList } from "../../../navigation/QuizNavigator";

type ResultsScreenRouteProp = RouteProp<QuizStackParamList, "Results">;

type Props = {
  route: ResultsScreenRouteProp;
};

const ResultsScreen = ({ route }: Props) => {
  const { results, score } = route.params;
  return (
    <>
      <ScoreContainer>
        <TextComponent variant="label">You scored</TextComponent>
        <TextComponent variant="label">
          {score} / {results.length}
        </TextComponent>
      </ScoreContainer>
      <ScrollView>
        {results.map((result) => (
          <Text key={result.question} style={{ margin: 20 }}>
            {result.question}
          </Text>
        ))}
      </ScrollView>
      <View style={{ margin: 16 }}>
        <TextComponent variant="label" style={{ textAlign: "center" }}>
          PLAY AGAIN?
        </TextComponent>
      </View>
    </>
  );
};

export default ResultsScreen;
