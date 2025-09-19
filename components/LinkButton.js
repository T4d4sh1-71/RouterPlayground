import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function LinkButton({page, title}) {
  return (
    <View style={styles.container}>
      
    <Link href={page}> {title} </Link>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
