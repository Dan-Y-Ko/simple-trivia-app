import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";

import TriviaQuestionsScreen from "./src/features/trivia/screens/TriviaQuestionsScreen";
import SafeArea from "./src/ui/components/utility/SafeAreaBase";
import { store } from "./src/store";

const App = (): JSX.Element => (
  <>
    <Provider store={store}>
      <StatusBar style="auto" />
      <SafeArea>
        <TriviaQuestionsScreen />
      </SafeArea>
    </Provider>
  </>
);

export default App;
