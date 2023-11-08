import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.yellow,
    padding: 24,
  },
  text: {
    color: Colors.yellow,
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
  },
});
