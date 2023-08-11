import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { theme, wh, ww } from "../../helpers";
import { SearchIcon } from "../../assets/Icons";

type Props = {
  updateSearch: (text:string) => void;
  search:string;
}

export default function CustomSearchBar({ search,updateSearch }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Find your task"
        placeholderTextColor={theme.grey3}
        value={search}
        onChangeText={updateSearch}
      />
      <SearchIcon size={ww(0.06)} color={theme.dark} />
    </View>
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
