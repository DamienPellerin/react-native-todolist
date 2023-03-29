import headerLogo from "../../assets/logo.png";
import { Image, Text } from "react-native";
import { s } from "./Header.style";

export function Header() {
  return (
    <>
      <Image style={s.img} source={headerLogo} resizeMode="contain" />
      <Text style={s.subtitle}>Tu as probablement un truc à faire</Text>
    </>
  );
}
