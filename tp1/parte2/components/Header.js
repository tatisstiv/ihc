import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TP1 - Parte 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3a4ca4',
    height: 100,
    marginBottom: 20
  },
  text: {
    color: '#fff',
    paddingTop: 55, 
    paddingLeft: 20,
    fontSize: 20
  }
});
