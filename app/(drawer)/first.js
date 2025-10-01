import { Link } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Linking, Pressable, Alert } from 'react-native';
import LinkButton from '../../components/LinkButton';

const url= "https://www.youtube.com/watch?v=oHg5SJYRHA0"



export default function First() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>First page</Text>
      <Text></Text>
    <LinkButton page="/" title="Go to Main Page" />
    <Text></Text>
    <Text></Text>
    <Text>
    </Text>
    <Pressable onPress={() => Linking.openURL(url)}> 
    <Text style={[styles.surprise]}> click here for a surprise </Text>
    </Pressable>
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
  surprise: {
    flex: 0.1,
    backgroundColor: 'orange',
    borderRadius: 50,
    alignContent: 'center',
    justifyContent: 'center',
  }
});