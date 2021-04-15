import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";

import SafeArea from "./src/ui/components/utility/SafeAreaBase";
import RootStack from "./src/navigation/index";
import { store } from "./src/store";

const App = (): JSX.Element => (
  <>
    <Provider store={store}>
      <StatusBar style="auto" />
      <SafeArea>
        <RootStack />
      </SafeArea>
    </Provider>
  </>
);

export default App;
