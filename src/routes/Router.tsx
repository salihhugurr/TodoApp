import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import TabRoutes from "./TabRoutes/TabRoutes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AddTask, TaskDetail } from "../pages";

const Stack = createStackNavigator<any>();

const Router = () => {

  return (
    <SafeAreaProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="App" component={TabRoutes} />
          <Stack.Screen name="AddTask" component={AddTask} />
          <Stack.Screen name="TaskDetail" component={TaskDetail} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default Router;
const styles = StyleSheet.create({});
