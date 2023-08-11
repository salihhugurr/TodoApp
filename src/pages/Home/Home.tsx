import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
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
import {theme, wh, ww } from "../../helpers";
import moment from "moment";
import { FAB } from "react-native-elements";

const Home: React.FC<PageProps> = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation<any>();
  const { todos } = useSelector((state: RootState) => state.todos);
  const [filteredTodos,setFilteredTodos] = useState<Todo[]>(todos);
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
    }, [search, todos,selectedTab,isFocused]);

  return (
    <View style={STYLES.container}>
      <CustomHeader title="Home" navigation={navigation} />
      <View style={styles.contentView}>
        <Text style={styles.title}>Hello Salih</Text>
        <Text style={styles.dateText}>
          {moment(currentDate).format("MMMM D, YYYY")}
        </Text>
        <CustomSearchBar search={search} updateSearch={setSearch}/>
        <View style={styles.categoryView}>
          <Text style={styles.title}>Todos</Text>
          {categories.length > 0 && (
            <Tabs
              tabs={["All", ...categories]}
              selectedTab={selectedTab}
              onTabPress={setSelectedTab}
            />
          )}
        </View>
        <TodoList list={filteredTodos} onPress={(todo:Todo) => navigation.navigate("TaskDetail",{todoObject:todo})}/>
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

export default Home;

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
