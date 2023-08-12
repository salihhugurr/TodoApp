import { Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeIcon, PlusIcon,
} from "../../assets/Icons";
import { theme, wh, ww } from "../../helpers";
import { CompletedTasks, Home } from "../../pages";
import { Icon } from "react-native-elements";



type Screen = {
  name: string;
  component: React.ComponentType<any>;
};


type Props = {};

const Tab = createBottomTabNavigator();

const TabRoutes = ({}: Props) => {

  const screens: Screen[] = [
      { name: "Home", component: Home },
      { name: "Completed", component: CompletedTasks },
  ]

  return (
    <>
      {screens && (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarOptions: {
              keyboardHidesTabBar: true,
            },
            tabBarIcon: ({ focused, color }) => {
              let icon = <HomeIcon size={ww(0.045)} color={color} />;

              if (route.name === "AddTask") {
                icon = <PlusIcon size={ww(0.045)} color={color} />;
              } else if (route.name === "Completed") {
                icon = <Icon name="check" size={ww(0.045)} color={color} />;
              }
              return (
                <View
                  style={{
                    gap: ww(0.01),
                    backgroundColor: theme.white,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {icon}
                  <Text
                    style={{
                      fontSize: ww(0.03),
                      fontFamily: theme.semiBold,
                      color: focused ? theme.appColor : theme.dark,
                    }}
                  >
                    {route.name}
                  </Text>
                </View>
              );
            },
            tabBarActiveTintColor: theme.appColor,
            tabBarInactiveTintColor: theme.dark,
            tabBarShowLabel: false,
            tabBarStyle: {
              height: wh(0.08),
              justifyContent: "center",
              alignItems: "center",
              borderTopWidth: 1,
              borderColor: theme.dark,
            },
            style: { position: "absolute" },
          })}
        >
          {screens.map((screen) => (
            <Tab.Screen
              options={{ headerShown: false }}
              key={screen.name}
              name={screen.name}
              component={screen.component}
            />
          ))}
        </Tab.Navigator>
      )}
    </>
  );
};

export default TabRoutes;

