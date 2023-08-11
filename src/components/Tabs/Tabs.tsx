import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { theme, wh, ww } from "../../helpers";

type Props = {
  tabs: string[];
  selectedTab: string;
  onTabPress: (tab: string, index: number) => void;
};

const Tabs = ({ tabs, selectedTab, onTabPress }: Props) => {
  const Item = ({ item, index }: any) => (
    <TouchableOpacity
      style={{...styles.tabView,backgroundColor:selectedTab === item ? theme.appColor : theme.grey}}
      onPress={() => onTabPress(item, index)}
    >
      <Text
        style={{
          ...styles.tabText,
          color: selectedTab === item ? theme.white : theme.dark,
        }}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return <Item item={item} index={index} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        horizontal
      />
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    width:"100%",
    alignSelf:"center",
    marginVertical:wh(.02),
    justifyContent:"space-between",
    alignItems: "center",
  },
  tabView: {
    flex:1,
    borderRadius:10,
    padding: 10,
    width:ww(.3),
    paddingHorizontal:ww(.05),
    marginHorizontal: 3,
  },
  tabText: {
    fontSize: ww(0.028),
    textAlign: "center",
    fontFamily: theme.bold,
  },

});
