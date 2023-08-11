import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { persistor, store } from "./src/redux/app/store";
import { LogBox } from "react-native";
import Router from "./src/routes/Router";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
LogBox.ignoreLogs(["Warning: ..."]); 
LogBox.ignoreAllLogs(); 

type Props = {};

const App = (props: Props) => {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Manrope-Medium": require("./src/assets/fonts/Manrope-Medium.ttf"),
        "Manrope-Bold": require("./src/assets/fonts/Manrope-Bold.ttf"),
        "Manrope-SemiBold": require("./src/assets/fonts/Manrope-SemiBold.ttf"),
        "Manrope-Regular": require("./src/assets/fonts/Manrope-Regular.ttf"),
      });
    }
    loadFonts();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
