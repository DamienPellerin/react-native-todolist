import { s } from "./CardTodo.style";
import { Image, Text, TouchableOpacity } from "react-native";
import CheckImg from "../../assets/check.png";

export function CardTodo({ todo }) {
  return (
    <TouchableOpacity>
      <Text></Text>
      <Image source={CheckImg} />
    </TouchableOpacity>
  );
}
