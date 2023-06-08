import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Activity1 from './activities/Activity1';
import Activity2 from './activities/Activity2';
import Activity3 from './activities/Activity3';

export default function App() {
  return (
    <View style={styles.container}>
    <Header activityNumber='3' />
      <Activity3 />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
});
