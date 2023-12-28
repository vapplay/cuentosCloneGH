import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStacks from "./views/navigation";
import "react-native-gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStacks />
    </NavigationContainer>
  );
}
//cambio de prueba
// commit de prueba 2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
