import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../features/quiz/screens/HomeScreen";
import QuizScreen from "../features/quiz/screens/QuizScreen";
import ResultsScreen from "../features/quiz/screens/ResultsScreen";

const QuizStack = createStackNavigator();

const QuizNavigator = (): JSX.Element => (
  <QuizStack.Navigator initialRouteName="Home" headerMode="none">
    <QuizStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ gestureEnabled: false }}
    />
    <QuizStack.Screen
      name="Quiz"
      component={QuizScreen}
      options={{ gestureEnabled: false }}
    />
    <QuizStack.Screen
      name="Results"
      component={ResultsScreen}
      options={{ gestureEnabled: false }}
    />
  </QuizStack.Navigator>
);

export default QuizNavigator;
