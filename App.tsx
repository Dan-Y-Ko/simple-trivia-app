import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import SafeArea from "./src/ui/components/utility/SafeAreaBase";
import RootStack from "./src/navigation/index";
import theme from "./src/ui/theme/index";
import { store } from "./src/store";

const App = (): JSX.Element | null => {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <StatusBar style="auto" />
          <SafeArea>
            <RootStack />
          </SafeArea>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
