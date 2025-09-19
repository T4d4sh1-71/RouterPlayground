import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LinkButton from '../components/LinkButton';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Main Page</Text>
      <Text></Text>
      <LinkButton page="about" title="Go to About Page" />
      <Text></Text>
      <LinkButton page="contact" title="Go to Contact Page" />
   


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 0.03,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
