import React from "react";
import { View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";

import type { QuizStackParamList } from "../../../navigation/QuizNavigator";

type ResultsScreenRouteProp = RouteProp<QuizStackParamList, "Results">;

type Props = {
  route: ResultsScreenRouteProp;
};

const ResultsScreen = ({ route }: Props) => {
  console.log(route.params);

  return (
    <View>
      <Text>Results Screen</Text>
    </View>
  );
};

export default ResultsScreen;
