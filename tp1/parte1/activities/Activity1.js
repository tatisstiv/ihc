import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function Activity1() {
  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');
  const [sum, setSum] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleTextChange = (text, input) => {
    if (isNaN(text)) {
      setErrorMessage('Only numbers are allowed');
    } else {
      setErrorMessage('');
    }
    
    input === 'A' ? setInputA(text) : setInputB(text);
  };

  const handleOnClick = () => {
    setSum(Number(inputA) + Number(inputB));
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='Enter a Number'
        value={inputA}
        onChangeText={(text) => handleTextChange(text, 'A')}
      />
      <TextInput
        style={styles.input}
        placeholder='Enter a Number'
        value={inputB}
        onChangeText={(text) => handleTextChange(text, 'B')}
      />
      <TouchableOpacity style={styles.button} onPress={handleOnClick} disabled={errorMessage.length > 0}>
        <Text style={styles.buttonText}>SUM</Text>
      </TouchableOpacity>
      <Text style={styles.output}>{sum}</Text>
      {errorMessage.length > 0 && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    margin: 5,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#eee',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16
  },
  errorMessage: {
    color: 'red'
  },
  output: {
    fontSize: 18
  }
});
