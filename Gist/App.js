import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';

export default function App() {

  console.log("App Excecuted");
  const handlePress = () => console.log("Text Press");

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress = {handlePress}>Gist</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9BFC6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text : {
      flex: 1,
      fontFamily: "comic-sans",
  }
});
