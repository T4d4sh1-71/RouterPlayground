import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LinkButton from '../components/LinkButton';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About page</Text>
    <Text> </Text>
     <LinkButton page="/" title="Go to Main Page" />
     <Text> </Text>
     <LinkButton page="contact" title="Go to Contact Page" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
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
