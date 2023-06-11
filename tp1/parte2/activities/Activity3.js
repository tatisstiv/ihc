import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";

import useLocation from "../hooks/useLocation";

export default function Activity3() {
  const [showToast, setShowToast] = useState(false);

  const { deviceLatitude, deviceLongitude, errorMessage } = useLocation();

  useEffect(() => {
    if (showToast) {
      if (errorMessage.length > 0) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: errorMessage,
          autoHide: true,
          topOffset: 60,
        });
      } else {
        Toast.show({
          type: "info",
          text1: "GPS Data",
          text2: `LAT: ${deviceLatitude} LONG: ${deviceLongitude}`,
          autoHide: true,
          topOffset: 60,
        });
      }
    }
  }, [errorMessage, showToast]);

  const toggleShowToast = () => {
    setShowToast(!showToast);
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={toggleShowToast}>
        <Text style={styles.buttonText}>GPS</Text>
      </TouchableOpacity>
      {showToast && <Toast onHide={toggleShowToast} />}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    backgroundColor: "#eee",
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
  },
});
