import { Link } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LinkButton from '../../components/LinkButton';

export default function First() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First page</Text>
      <Text></Text>
    <LinkButton page="/" title="Go to Main Page" />
    <Text></Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
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