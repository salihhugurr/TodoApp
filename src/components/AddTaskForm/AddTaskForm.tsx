import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import { STYLES } from "../../styles";
import { getRandomColor, theme, wh, ww } from "../../helpers";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/features/todo/todoSlice";
import { RootState } from "../../redux/app/store";
import { addCategory } from "../../redux/features/categories/categorySlice";
import { useNavigation } from "@react-navigation/native";
type Props = {
  todoObject?: Todo;
};

const AddTaskForm = ({ todoObject }: Props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const { categories } = useSelector((state: RootState) => state.categories);
  const [openDate, setOpenDate] = useState<boolean>(false);
  const [openStartTime, setOpenStartTime] = useState<boolean>(false);
  const [openEndTime, setOpenEndTime] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");
  const [todo, setTodo] = useState<Todo>(
    todoObject
      ? todoObject
      : {
          info: "",
          date: new Date(),
          startTime: new Date(),
          endTime: new Date(),
          completed: false,
          categories: [],
          description: "",
        }
  );

  const handleInputChange = (property: keyof Todo, value: any) => {
    setTodo((prevTodo) => ({
      ...prevTodo,
      [property]: value,
    }));
  };

  const createTodo = () => {
    if (todo.info && todo.categories.length > 0 && todo.description) {
      dispatch(addTodo(todo));
      todo.categories.forEach((category: string) => {
        !categories.includes(category) && dispatch(addCategory(category));
      });
      navigation.goBack();
    } else Alert.alert("Lütfen tüm alanları doldurunuz.")
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraScrollHeight={wh(0.04)}
      extraHeight={wh(0.1)}
      enableAutomaticScroll
      style={STYLES.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: wh(0.06) }}
    >
      <View style={styles.sectionView}>
        <Text style={styles.inputTitle}>Title</Text>
        <View style={styles.inputView}>
          <TextInput
            editable={!todoObject}
            value={todo.info}
            placeholder="Title"
            placeholderTextColor={theme.grey3}
            onChangeText={(text) => handleInputChange("info", text)}
            style={styles.input}
          />
        </View>
      </View>
      <DateTimePickerModal
        isVisible={openDate}
        locale="tr"
        date={todo.date}
        mode="date"
        onConfirm={(date) => {
          setOpenDate(false);
          handleInputChange("date", date);
        }}
        onCancel={() => {
          setOpenDate(false);
        }}
      />
      <TouchableOpacity
        style={styles.sectionView}
        disabled={todoObject !== undefined}
        onPress={() => setOpenDate(true)}
      >
        <Text style={styles.inputTitle}>Date</Text>
        <View style={styles.inputView}>
          <Text style={styles.input2}>
            {moment(todo.date).format("MMMM D, YYYY")}
          </Text>
          <View>
            <Icon
              name="calendar"
              type="entypo"
              size={ww(0.05)}
              color={theme.dark}
            />
          </View>
        </View>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={openStartTime}
        locale="tr"
        date={todo.startTime}
        mode="time"
        onConfirm={(date) => {
          setOpenStartTime(false);
          handleInputChange("startTime", date);
        }}
        onCancel={() => {
          setOpenStartTime(false);
        }}
      />
      <DateTimePickerModal
        isVisible={openEndTime}
        locale="tr"
        date={todo.endTime}
        mode="time"
        onConfirm={(date) => {
          setOpenEndTime(false);
          handleInputChange("endTime", date);
        }}
        onCancel={() => {
          setOpenEndTime(false);
        }}
      />
      <View style={styles.sectionView2}>
        <View style={{ flex: 1 }}>
          <Text style={styles.inputTitle}>Start Time</Text>
          <TouchableOpacity
            disabled={todoObject !== undefined}
            onPress={() => setOpenStartTime(true)}
            style={styles.inputView2}
          >
            <Text style={styles.input2}>
              {moment(todo.startTime).format("LT") || "--"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.inputTitle}>End Time</Text>
          <TouchableOpacity
            disabled={todoObject !== undefined}
            onPress={() => setOpenEndTime(true)}
            style={styles.inputView2}
          >
            <Text style={styles.input2}>
              {moment(todo.endTime).format("LT") || "--"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sectionView}>
        <Text style={styles.inputTitle}>Description</Text>
        <View style={styles.inputViewDescription}>
          <TextInput
            editable={!todoObject}
            multiline
            value={todo.description}
            placeholderTextColor={theme.grey3}
            placeholder="Description"
            onChangeText={(text) => handleInputChange("description", text)}
            style={styles.inputDescription}
          />
        </View>
      </View>
      {!todoObject && (
        <View style={styles.sectionView}>
          <Text style={styles.inputTitle}>Add category</Text>
          <View style={styles.inputView}>
            <TextInput
              value={category}
              onSubmitEditing={() => {
                handleInputChange("categories", [...todo.categories, category]);
                setCategory("");
              }}
              onChangeText={setCategory}
              placeholder="Category"
              placeholderTextColor={theme.grey3}
              style={styles.input}
            />
            <Icon
              name="plus"
              type="evilicon"
              onPress={() => {
                handleInputChange("categories", [...todo.categories, category]);
                setCategory("");
              }}
            />
          </View>
        </View>
      )}

      {todo.categories.length > 0 && (
        <View style={styles.categoriesContainer}>
          {todo.categories.map((category: string) => (
            <View key={category} style={styles.categoryView}>
              <Text numberOfLines={1} style={styles.categoryText}>
                {category}
              </Text>
            </View>
          ))}
        </View>
      )}
      {!todoObject && (
        <TouchableOpacity onPress={createTodo} style={styles.authButton}>
          <Text style={styles.authButtonText}>Create a new task</Text>
        </TouchableOpacity>
      )}
    </KeyboardAwareScrollView>
  );
};

export default AddTaskForm;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontFamily: theme.semiBold,
    fontSize: ww(0.05),
    marginVertical: wh(0.04),
  },
  sectionView: {
    marginVertical: wh(0.01),
  },
  inputView: {
    height: wh(0.05),
    alignItems: "center",
    paddingHorizontal: ww(0.03),
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.grey,
    width: ww(0.95),
    marginVertical: wh(0.012),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.grey,
  },
  input: {
    fontFamily: theme.semiBold,
    color: theme.dark,
    flex: 1,
  },
  authButton: {
    backgroundColor: theme.appColor,
    marginVertical: wh(0.03),
    paddingVertical: ww(0.05),
    paddingHorizontal: ww(0.08),
    justifyContent: "center",
    borderRadius: 5,
  },
  authButtonText: {
    color: theme.white,
    textAlign: "center",
    fontFamily: theme.medium,
    fontSize: ww(0.035),
  },
  inputTitle: {
    color: theme.grey2,
    fontFamily: theme.medium,
    fontSize: ww(0.035),
  },
  sectionView2: {
    marginVertical: wh(0.01),
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  inputView2: {
    height: wh(0.05),
    alignItems: "center",
    paddingHorizontal: ww(0.03),
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.grey,
    width: ww(0.46),
    marginVertical: wh(0.015),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.grey,
  },
  input2: {
    fontFamily: theme.semiBold,
    color: theme.dark,
    flex: 1,
  },
  inputViewDescription: {
    height: wh(0.12),
    paddingVertical: ww(0.01),
    paddingHorizontal: ww(0.03),
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.grey,
    width: ww(0.95),
    marginVertical: wh(0.015),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.grey,
  },
  inputDescription: {
    flex: 1,
    textAlign: "left",
    alignSelf: "flex-start",
    fontFamily: theme.semiBold,
    color: theme.dark,
  },
  categoriesContainer: {
    width: "100%",
    overflow: "hidden",
    alignSelf: "center",
    padding: ww(0.03),
    backgroundColor: theme.grey,
    borderRadius: 12,
    gap: ww(0.01),
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  categoryView: {
    width: ww(0.9) / 3.5,
    alignItems: "center",
    backgroundColor: getRandomColor(),
    paddingHorizontal: ww(0.03),
    paddingVertical: wh(0.01),
    borderRadius: ww(0.02),
    margin: ww(0.01),
  },
  categoryText: {
    fontFamily: theme.semiBold,
    color: theme.white,
    fontSize: ww(0.028),
  },
});
