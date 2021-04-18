import React from "react";
import {
  createStackNavigator,
  StackCardInterpolatedStyle,
  StackCardInterpolationProps,
} from "@react-navigation/stack";

import HomeScreen from "../features/quiz/screens/HomeScreen";
import QuizScreen, { Results } from "../features/quiz/screens/QuizScreen";
import ResultsScreen from "../features/quiz/screens/ResultsScreen";

export type QuizStackParamList = {
  Home: undefined;
  Quiz: undefined;
  Results: { results: Results[]; score: number };
};

const forFade = ({
  current,
}: StackCardInterpolationProps): StackCardInterpolatedStyle => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const QuizStack = createStackNavigator<QuizStackParamList>();

const QuizNavigator = (): JSX.Element => (
  <QuizStack.Navigator initialRouteName="Home" headerMode="none">
    <QuizStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ gestureEnabled: false, cardStyleInterpolator: forFade }}
    />
    <QuizStack.Screen
      name="Quiz"
      component={QuizScreen}
      options={{ gestureEnabled: false, cardStyleInterpolator: forFade }}
    />
    <QuizStack.Screen
      name="Results"
      component={ResultsScreen}
      options={{ gestureEnabled: false, cardStyleInterpolator: forFade }}
    />
  </QuizStack.Navigator>
);

export default QuizNavigator;
