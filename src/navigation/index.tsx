import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import QuizNavigator from "./QuizNavigator";
import colors from "../ui/theme/colors";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.bg.secondary,
  },
};

// create container navigation in case app needs authentication or onboarding before proceeding to main app
const RootStack = (): JSX.Element => (
  <NavigationContainer theme={MyTheme}>
    <QuizNavigator />
  </NavigationContainer>
);

export default RootStack;
