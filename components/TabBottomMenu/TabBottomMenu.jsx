import { s } from "./TabBottomMenu.style";
import { Text, TouchableOpacity, View } from "react-native";

export function TabBottomMenu({ selectedTabName, onPress }) {
  function getTextStyle(tabName) {
    return {
      fontWeight: "bold",
      color: tabName === selectedTabName ? "#2F76E5" : "black",
    };
  }
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={() => onPress("all")} style={s.btn}>
        <Text style={getTextStyle("all")}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("inProgress")} style={s.btn}>
        <Text style={getTextStyle("inProgress")}>In progress</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("done")} style={s.btn}>
        <Text style={getTextStyle("done")}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
