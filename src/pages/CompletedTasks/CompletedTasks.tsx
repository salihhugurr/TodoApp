import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
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

const CompletedTasks: React.FC<PageProps> = () => {
  const navigation = useNavigation<any>();
  const { todos } = useSelector((state: RootState) => state.todos);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const filteredTasks = todos.filter((todo) => {
      const searchMatches = todo.info
        .toLowerCase()
        .includes(search.toLowerCase());

      const completedMatches = todo.completed === true;

      return searchMatches && completedMatches;
    });

    setFilteredTodos(filteredTasks);
  }, [search,todos]);

  return (
    <View style={STYLES.container}>
      <CustomHeader title="CompletedTasks" navigation={navigation} />
      <View style={styles.contentView}>
        <CustomSearchBar search={search} updateSearch={setSearch} />
        <View style={styles.categoryView}>
          <Text style={styles.title}>Completed Tasks</Text>
        </View>
        <TodoList
          list={filteredTodos}
          onPress={(todo: Todo) =>
            navigation.navigate("TaskDetail", { todoObject: todo })
          }
        />
      </View>
      <FAB
        onPress={() => navigation.navigate("AddTask")}
        style={{ position: "absolute", right: ww(0.06), bottom: wh(0.03) }}
        size="small"
        color={theme.appColor}
        icon={{
          name: "plus",
          type: "entypo",
          color: "white",
        }}
      />
    </View>
  );
};

export default CompletedTasks;

const styles = StyleSheet.create({
  contentView: {
    paddingHorizontal: ww(0.06),
    paddingVertical: wh(0.02),
  },
  title: {
    fontFamily: theme.bold,
    fontSize: ww(0.06),
    color: theme.dark,
  },
  dateText: {
    fontFamily: theme.medium,
    fontSize: ww(0.03),
    color: theme.grey2,
  },
  categoryView: {
    marginVertical: wh(0.03),
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
});
