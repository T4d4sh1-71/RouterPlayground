import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LinkButton from '../../components/LinkButton';

export default function LookHere() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Look Here page</Text>
      <Text></Text>
    <LinkButton page="/" title="Go to Main Page" />
    <Text></Text>
    <LinkButton page="aVideoPage" title="Go to Video Page" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
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