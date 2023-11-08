import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGame from "./src/screens/StartGame";
import { useState } from "react";
import GameScreen from "./src/screens/GameScreen";
import Colors from "./src/constants/colors";

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
    <LinearGradient
      colors={[Colors.PRIMARY800, Colors.yellow]}
      style={styles.container}
    >
      <ImageBackground
        style={styles.container}
        source={require("./assets/images/dice.jpg")}
        resizeMode="cover"
        imageStyle={styles.backGroundImg}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
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
