import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Title from "../ components/ui/Title";
import NumberContainer from "../ components/game/NumberContainer";

const generateRandomNum = (min, max, exclude) => {
  const randomNum = Math.floor(Math.random() * (max - min) + min);
  if (randomNum === exclude) {
    return generateRandomNum(min, max, exclude);
  } else {
    return randomNum;
  }
};

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomNum(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
