import { StyleSheet, Text, View } from "react-native";

export default function Header({ activityNumber }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Atividade {activityNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3a4ca4",
    height: 100,
  },
  text: {
    color: "#fff",
    paddingTop: 55,
    paddingLeft: 20,
    fontSize: 20,
  },
});
