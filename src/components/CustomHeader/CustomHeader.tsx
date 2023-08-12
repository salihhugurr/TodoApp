import React from "react";
import { StyleSheet,  } from "react-native";
import { Divider, Header , Icon, Text } from "react-native-elements";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import LogoIcon from "../../assets/Icons/LogoIcon";
import { theme, wh, ww } from "../../helpers";
import { StatusBar } from "expo-status-bar";

type HeaderProps = {
  title?: string;
  left?: boolean;
  navigation: any;
  onPressRight?: () => void;
};
const CustomHeader = ({ title, left, navigation,onPressRight }: HeaderProps) => {
  return (
    <>
      <StatusBar style="auto" />
      <Header
        containerStyle={styles.headerContainer}
        leftContainerStyle={{ width: "100%" }}
        leftComponent={
          !left ? (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("Home", { screen: "Home" })}
            >
              <LogoIcon size={ww(0.1)} color={undefined} />
            </TouchableWithoutFeedback>
          ) : (
            <TouchableOpacity
              style={styles.headerLeft}
              onPress={() => navigation.goBack()}
            >
              <Icon
                name="chevron-left"
                type="feather"
                color={theme.dark}
                size={ww(0.06)}
              />
            </TouchableOpacity>
          )
        }
        rightComponent={
          <>
            {onPressRight && (
              <TouchableOpacity
                style={styles.headerRight}
                onPress={onPressRight}
              >
                <Icon
                  name="delete"
                  type="material"
                  color={theme.warning}
                  size={ww(0.06)}
                />
              </TouchableOpacity>
            )}
          </>
        }
        centerComponent={
          !left ? (
            <Text style={styles.titleText}>Todo App</Text>
          ) : (
            <Text style={styles.titleText2}>{title}</Text>
          )
        }
      />

      <Divider color={theme.dark} />
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: theme.white,
    height: wh(0.13),
    width: "100%",
    paddingHorizontal: 15,
  },
  heading: {
    color: "white",
    fontSize: ww(0.04),
    fontWeight: "bold",
  },
  headerLeft: {
    flexDirection: "row",
    gap: ww(0.03),
    alignItems: "center",
  },
  headerRight: {
    flexDirection: "row",
    gap: ww(0.03),
    alignItems: "center",
  },
  titleText: {
    fontSize: ww(0.045),
    textAlign: "center",
    color: theme.appColor,
    fontFamily: theme.bold,
  },
  titleText2: {
    fontSize: ww(0.045),
    textAlign: "center",
    color: theme.dark,
    fontFamily: theme.bold,
  },
});

export default CustomHeader;
