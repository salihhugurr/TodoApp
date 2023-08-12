import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Keyboard } from "react-native";
import { STYLES } from "../../styles";
import {
  CustomHeader,
  CustomSearchBar,
  TodoList,
} from "../../components";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/app/store";
import { theme, wh, ww } from "../../helpers";
import { FAB } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const CompletedTasks: React.FC<PageProps> = () => {
  const navigation = useNavigation<any>();
  const { todos } = useSelector((state: RootState) => state.todos);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const filteredTasks = todos.filter((todo) => {
      console.log("todoxxxxxxx:", todo);
      const searchMatches = todo.info
        .toLowerCase()
        .includes(search.toLowerCase());

      const completedMatches = todo.completed === true;

      return searchMatches && completedMatches;
    });
    setFilteredTodos(filteredTasks);
  }, [search,todos]);

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      containerStyle={STYLES.container}
    >
      <CustomHeader title="CompletedTasks" navigation={navigation} />
      <View style={styles.categoryView}>
        <CustomSearchBar search={search} updateSearch={setSearch} />
        <Text style={styles.title}>Completed Tasks</Text>
        <TodoList
          list={filteredTodos}
          onPress={(todo: Todo) =>
            navigation.navigate("TaskDetail", { todoObject: todo })
          }
        />
        <FAB
          onPress={() => navigation.navigate("AddTask")}
          style={{ alignSelf: "flex-end", right: ww(0.06), bottom: wh(0.03) }}
          size="small"
          color={theme.appColor}
          icon={{
            name: "plus",
            type: "entypo",
            color: "white",
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CompletedTasks;

const styles = StyleSheet.create({
  contentView: {
    paddingHorizontal: ww(0.06),
    paddingVertical: wh(0.02),
  },
  title: {
    marginVertical:wh(.02),
    fontFamily: theme.bold,
    fontSize: ww(0.06),
    color: theme.dark,
  },
  dateText: {
    fontFamily: theme.medium,
    fontSize: ww(0.03),
    color: theme.grey2,
  },
  titleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: theme.medium,
    fontSize: ww(0.03),
    color: theme.grey2,
  },
  categoryView: {
    flex: 1,
    paddingHorizontal: ww(0.06),
  },
});
