import { StatusBar, StyleSheet, Platform, Text, View } from 'react-native';
import { About } from './app/screens/homepage';

export default function App() {
  return (
    <View style={styles.container}>
      <About />
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
