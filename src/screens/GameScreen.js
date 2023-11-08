import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={{ color: "#fff" }}>GameScreen</Text>
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
