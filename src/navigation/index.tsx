import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import QuizNavigator from "./QuizNavigator";

// create container navigation in case app needs authentication or onboarding before proceeding to main app
const RootStack = (): JSX.Element => (
  <NavigationContainer>
    <QuizNavigator />
  </NavigationContainer>
);

export default RootStack;
