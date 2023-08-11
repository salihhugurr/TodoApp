import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { getRandomColor, theme, wh, ww } from "../../helpers";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import moment from "moment";
import CustomCheckIcon from "../CustomCheckIcon";

type Props = {
  list: Todo[];
  onPress: (todo:Todo) => void;
};

const TodoList = ({ list,onPress }: Props) => {

  const renderItem = ({ item, index }:any) => {
    return (
      <TouchableOpacity
        onPress={() => onPress(item)}
        key={index}
        style={styles.todoView}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.infoText}>{item.info}</Text>
          <CustomCheckIcon item={item} index={index} />
        </View>
        {item.categories && (
          <ScrollView horizontal contentContainerStyle={{ gap: 10 }}>
            {item.categories.map((category: string) => (
              <View key={category} style={styles.categoryView}>
                <Text style={styles.categoryText}>{category}</Text>
              </View>
            ))}
          </ScrollView>
        )}
        <View style={styles.rowCenter}>
          <View style={styles.timeRowContainer}>
            <Icon name={"calendar"} type="antdesign" size={ww(0.05)} />
            <Text style={styles.dateText}>
              {moment(item.date).format("MMMM D, YYYY")}
            </Text>
          </View>

          <View style={styles.timeRowContainer}>
            <Text style={styles.dateText}>
              {moment(item.startTime).format("LT")}
            </Text>
            <Text>-</Text>
            <Text style={styles.dateText}>
              {" "}
              {moment(item.endTime).format("LT")}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingBottom:wh(.1),
    marginVertical: wh(0.02),
  },
  todoView: {
    flex:1,
    width: "100%",
    gap: wh(0.02),
    borderRadius: 10,
    padding: wh(0.02),
    backgroundColor: theme.white,
    borderWidth: 1,
    marginVertical:wh(.01),
    paddingHorizontal: ww(0.05),
  },
  infoText: {
    fontSize: ww(0.04),
    fontFamily: theme.bold,
    color: theme.dark,
  },
  dateText: {
    fontSize: ww(0.03),
    fontFamily: theme.semiBold,
    color: theme.dark,
  },
  timeRowContainer: { flexDirection: "row", gap: 10, alignItems: "center" },
  categoryView: {
    backgroundColor: getRandomColor(),
    paddingHorizontal: ww(0.02),
    paddingVertical: 5,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: ww(0.025),
    textAlign: "center",
    fontFamily: theme.bold,
    color: theme.white,
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
