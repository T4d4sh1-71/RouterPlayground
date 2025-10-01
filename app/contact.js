import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LinkButton from '../components/LinkButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>  Contact page  </Text>
      <Text></Text>
    <LinkButton page="/" title="Go to Main Page" />
    <Text></Text>
    <LinkButton page="about" title="Go to About Page" />
    <Text></Text>
    <LinkButton page="something" title="Go to something"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 0.03,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: "flex-start",
  },
});
