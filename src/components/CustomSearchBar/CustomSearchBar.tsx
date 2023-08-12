import React from "react";
import { StyleSheet,TextInput, Keyboard } from "react-native";
import { theme, wh, ww } from "../../helpers";
import { SearchIcon } from "../../assets/Icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

type Props = {
  updateSearch: (text:string) => void;
  search:string;
}

export default function CustomSearchBar({ search,updateSearch }: Props) {
  return (
    <TouchableWithoutFeedback
      onPressOut={Keyboard.dismiss}
      style={styles.container}
    >
      <TextInput
        style={styles.input}
        placeholder="Find your task"
        placeholderTextColor={theme.grey3}
        value={search}
        onChangeText={updateSearch}
      />
      <SearchIcon size={ww(0.06)} color={theme.dark} />
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:wh(.055),
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:ww(.05),
    marginTop:wh(.02),
    borderRadius:12,
    backgroundColor:theme.grey
  },
  input:{
    width:"90%",
    height:"100%",
    fontFamily:theme.semiBold,
    color:theme.dark,
    fontSize:ww(.035),
  }
});
