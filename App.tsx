import React from "react";
import { StatusBar } from "expo-status-bar";

import TriviaQuestionsScreen from "./src/features/trivia/screens/TriviaQuestionsScreen";
import SafeArea from "./src/ui/components/utility/SafeAreaBase";

const App = (): JSX.Element => (
  <>
    <StatusBar style="auto" />
    <SafeArea>
      <TriviaQuestionsScreen />
    </SafeArea>
  </>
);

export default App;
