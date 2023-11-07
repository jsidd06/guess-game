import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import PrimaryButton from "../ components/PrimaryButton";

const StartGame = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} keyboardType="numeric" maxLength={2} />
      </View>
      <View style={styles.btnCtn}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
    marginHorizontal: 14,
    backgroundColor: "#3b021f",
    padding: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    borderRadius: 8,
  },
  inputContainer: {
    alignItems: "center",
  },
  input: {
    width: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#ddb52f",
    padding: 10,
    color: "#ddb52f",
    fontSize: 25,
    fontWeight: "500",
  },
  btnCtn: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",
  },
});
