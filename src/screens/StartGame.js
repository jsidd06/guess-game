import { Alert, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../ components/PrimaryButton";

const StartGame = () => {
  const [enteredNum, setEnteredNum] = useState("");

  const resetHandler = () => {
    setEnteredNum("");
  };

  const confirmHandler = () => {
    const confirmNum = parseInt(enteredNum);
    if (isNaN(confirmNum) || confirmNum <= 0 || confirmNum > 99) {
      Alert.alert("Invalid Number", "Number has to be a between 1 to 99", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
  };
  return (
    <View style={styles.rootContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          keyboardType="numeric"
          maxLength={2}
          value={enteredNum}
          onChangeText={(text) => setEnteredNum(text)}
        />
      </View>
      <View style={styles.btnCtn}>
        <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
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
