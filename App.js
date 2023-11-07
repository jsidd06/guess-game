import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGame from "./src/screens/StartGame";

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.container}>
      <StartGame />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
