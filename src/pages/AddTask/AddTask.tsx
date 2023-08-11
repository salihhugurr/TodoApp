import React from "react";
import { View } from "react-native";
import { STYLES } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { AddTaskForm, CustomHeader } from "../../components";

const AddTask: React.FC<PageProps> = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={STYLES.container}>
      <CustomHeader left title="New Task" navigation={navigation}/>
      <AddTaskForm />
    </View>
  );
};

export default AddTask;

