import React from "react";
import { View,  Alert } from "react-native";
import { STYLES } from "../../styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AddTaskForm, CustomHeader } from "../../components";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/features/todo/todoSlice";

const TaskDetail: React.FC<TaskDetailProps> = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const {todoObject} = route.params;
  const dispatch = useDispatch();


  return (
    <View style={STYLES.container}>
      <CustomHeader left title="Task Detail" navigation={navigation} onPressRight={() => {
        Alert.alert("Delete Task", "Are you sure to delete this task?", [
          {
            text: "Cancel",
            style: "cancel",
          },
          { text: "Yes", onPress: () => {
            navigation.goBack();
            dispatch(deleteTodo(todoObject));
          } },
        ]);
        
      }}/>
      <AddTaskForm todoObject={todoObject}/>
    </View>
  );
};

export default TaskDetail;

