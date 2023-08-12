import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Keyboard } from "react-native";
import { STYLES } from "../../styles";
import {
  CustomHeader,
  CustomSearchBar,
  Tabs,
  TodoList,
} from "../../components";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/app/store";
import { theme, wh, ww } from "../../helpers";
import moment from "moment";
import { FAB } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Home: React.FC<PageProps> = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation<any>();
  const { todos } = useSelector((state: RootState) => state.todos);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos);
  const { categories } = useSelector((state: RootState) => state.categories);
  const [selectedTab, setSelectedTab] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const currentDate = new Date();

  useEffect(() => {
    const filteredTasks = todos.filter((todo) => {
      const categoryMatches =
        selectedTab === "All" ||
        todo.categories.some(
          (category) => category.trim() === selectedTab.trim()
        );
      const searchMatches = todo.info
        .toLowerCase()
        .includes(search.toLowerCase());

      return categoryMatches && searchMatches;
    });
    setFilteredTodos(() => {
      return filteredTasks;
    });
  }, [search, todos, selectedTab, isFocused]);

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      containerStyle={{ ...STYLES.container }}
    >
      <CustomHeader title="CompletedTasks" navigation={navigation} />
      <View style={styles.welcomeView}>
        <Text style={styles.title}>Hello Salih</Text>
        <Text style={styles.dateText}>
          {moment(currentDate).format("MMMM D, YYYY")}
        </Text>
        <CustomSearchBar search={search} updateSearch={setSearch} />
        <Text style={styles.title}>Todos</Text>
        {categories.length > 0 && (
          <Tabs
            tabs={["All", ...categories]}
            selectedTab={selectedTab}
            onTabPress={setSelectedTab}
          />
        )}
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

export default Home;

const styles = StyleSheet.create({
  contentView: {
    paddingHorizontal: ww(0.06),
  },
  title: {
    marginTop: wh(0.015),
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
    flex: 1,
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
  welcomeView:{
    flex:1,
    paddingHorizontal:ww(.06)
  }
});
