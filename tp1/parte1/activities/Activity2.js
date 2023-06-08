import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Activity2() {
  const [input, setInput] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleTextChange = (text) => {
    setInput(text);
  };

  const handleOnClick = () => {
    setShowMessage(true);
  };

  return (
    <View>
      {showMessage ? (
        <Text style={styles.inputDisplay}>{input}</Text>
      ) : (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter a Message"
            value={input}
            onChangeText={(text) => handleTextChange(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleOnClick}>
            <Text style={styles.buttonText}>SEND</Text>
          </TouchableOpacity>
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
    paddingLeft: 10
  },
});
