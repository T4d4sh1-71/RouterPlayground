import { Link } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Alert, Linking } from 'react-native';
import LinkButton from '../../components/LinkButton';

const coco= "https://www.youtube.com/watch?v=020g-0hhCAU"
const job="https://eforms.com/images/2018/03/Employment-Job-Application.png"

export default function Second() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Second page</Text>
      <Text></Text>
      <LinkButton page="/" title="Go to Main Page" />
      <Text></Text>
      <Text></Text>
      <Text></Text>
        <Pressable onPress={() => Alert.alert("BEFORE YOU CONTINUE!!!", "Are you above the age of 18?", [
          {text: "No", onPress: () => {Linking.openURL(coco)}}, {text: "Yes", onPress: () => {Linking.openURL(job)}}
          ])}>
          <Text style={[styles.button]}> Click here for age verification </Text>
        </Pressable>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 0.03,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 0.2,
    backgroundColor:"lime",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  }
});