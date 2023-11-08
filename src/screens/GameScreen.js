import { StyleSheet, View } from "react-native";
import React from "react";
import Title from "../ components/Title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>GameScreen</Title>
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
