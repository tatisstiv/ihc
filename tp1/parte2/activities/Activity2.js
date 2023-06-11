import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import useGyroscope from "../hooks/useGyroscope";

export default function Activity2() {
  const { xRotation, yRotation, zRotation } = useGyroscope();

  return (
    <View>
      <Text style={styles.label}>Rotation</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="X"
          value={"X: " + xRotation.toFixed(6)}
        />
        <TextInput
          style={styles.input}
          placeholder="Y"
          value={"Y: " + yRotation.toFixed(6)}
        />
        <TextInput
          style={styles.input}
          placeholder="Z"
          value={"Z: " + zRotation.toFixed(6)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderBottomWidth: 1,
    marginHorizontal: 5,
    flexGrow: 2,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    marginTop: 20,
  },
});
