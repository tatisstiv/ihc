import React, { useEffect, useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { Accelerometer } from "expo-sensors";

export default function Activity3() {
  const [xCoordinate, setXCoordinate] = useState(0);
  const [yCoordinate, setYCoordinate] = useState(0);
  const [zCoordinate, setZCoordinate] = useState(0);

  const range = 2.0;

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const subscription = Accelerometer.addListener(({x, y, z}) => {
      setXCoordinate(x);
      setYCoordinate(y);
      setZCoordinate(z);

      const totalAcceleration = Math.sqrt(x^2 + y^2 + z^2);

      if (totalAcceleration > range) {
        setShowMessage(true);
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View>
      {showMessage ? (
        <Text style={styles.inputDisplay}>Lorem ipsum</Text>
      ) : (
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="X" value={'X: ' + xCoordinate.toFixed(6)} />
          <TextInput style={styles.input} placeholder="Y" value={'Y: ' + yCoordinate.toFixed(6)} />
          <TextInput style={styles.input} placeholder="Z" value={'Z: ' + zCoordinate.toFixed(6)} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderBottomWidth: 1,
    margin: 5,
    flexGrow: 2,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#eee",
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
  },
  inputDisplay: {
    fontSize: 18,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 100
  },
});
