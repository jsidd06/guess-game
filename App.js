import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGame from "./src/screens/StartGame";

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={require("./assets/images/dice.jpg")}
        resizeMode="cover"
        imageStyle={styles.backGroundImg}
      >
        <StartGame />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backGroundImg: {
    opacity: 0.15,
  },
});
