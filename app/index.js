import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LinkButton from '../components/LinkButton';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>  Main Page  </Text>
      <Text></Text>
      <LinkButton styles={styles.aboutPage} page="about" title="Go to About Page" />
      <Text></Text>
      <LinkButton page="contact" title="Go to Contact Page"  />    
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
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: "flex-start",
  },
  aboutPage: {
    flex: 0.3,
    width: 200,
    backgroundColor: 'green',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactPage: {
    flex: 0.3,
    width: 200,
    backgroundColor: 'navy blue',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }

  },
);
