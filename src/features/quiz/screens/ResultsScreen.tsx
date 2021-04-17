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
    <View>
      <ScoreContainer>
        <TextComponent variant="label">You scored</TextComponent>
        <TextComponent variant="label">
          {score} / {results.length}
        </TextComponent>
      </ScoreContainer>
      <ScrollView>
        {results.map((result) => (
          <View key={result.question} style={{ margin: 20 }}>
            <Text>{result.question}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ResultsScreen;
