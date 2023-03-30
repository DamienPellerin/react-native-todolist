import { s } from "./ButtonAdd.style";
import { Text, TouchableOpacity } from "react-native";

export function ButtonAdd({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={s.btn}>
      <Text style={s.txt}>+ Nouvelle tâche</Text>
    </TouchableOpacity>
  );
}
