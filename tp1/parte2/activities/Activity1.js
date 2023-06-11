import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import useAccelerometer from "../hooks/useAccelerometer";
import useLightSensor from "../hooks/useLightSensor";

export default function Activity1() {
  const { xAcceleration, yAcceleration, zAcceleration } = useAccelerometer();
  const luminosity = useLightSensor();

  return (
    <View>
      <Text style={styles.input}>{"Luminosity: " + luminosity}</Text>
      <Text style={styles.label}>Acceleration</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="X"
          value={"X: " + xAcceleration.toFixed(6)}
        />
        <TextInput
          style={styles.input}
          placeholder="Y"
          value={"Y: " + yAcceleration.toFixed(6)}
        />
        <TextInput
          style={styles.input}
          placeholder="Z"
          value={"Z: " + zAcceleration.toFixed(6)}
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
  },
  label: {
    marginTop: 20,
  },
});
