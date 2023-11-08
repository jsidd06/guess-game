import { StyleSheet, Text } from "react-native";
import React from "react";
import Colors from "../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: Colors.yellow,
    fontWeight: "bold",
    fontSize: 24,
    padding: 12,
    borderWidth: 2,
    borderColor: Colors.yellow,
    textAlign: "center",
  },
});
