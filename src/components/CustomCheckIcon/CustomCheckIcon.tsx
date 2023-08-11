import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import { updateTodoCompleted } from "../../redux/features/todo/todoSlice";
import { theme } from "../../helpers";
import { useEffect, useState } from "react";

type Props = {
  item:Todo,
  index:number,
}
const CustomCheckIcon = ({ item,index }:Props) => {
  const dispatch = useDispatch();
  const [completed,setCompleted] = useState(item.completed);

  useEffect(()=> {
    setCompleted(item.completed)
  },[item])

  const handlePress = () => {
    setCompleted(!completed);
    dispatch(updateTodoCompleted({ index: index, completed: !completed }));
  };

  return (
    <Icon
      name={completed ? "checkcircle" : "checkcircleo"}
      type="antdesign"
      color={completed ? theme.success : theme.dark}
      onPress={handlePress}
    />
  );
};

export default CustomCheckIcon;
