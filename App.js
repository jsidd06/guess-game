import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGame from "./src/screens/StartGame";
import { useState } from "react";
import GameScreen from "./src/screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState("");
  const pickedHandler = (pickedNum) => {
    setUserNumber(pickedNum);
  };

  let screen = <StartGame pickedUpNumber={pickedHandler} />;
  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={require("./assets/images/dice.jpg")}
        resizeMode="cover"
        imageStyle={styles.backGroundImg}
      >
        {screen}
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
