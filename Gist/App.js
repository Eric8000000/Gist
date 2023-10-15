import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import List from './components/List.js';
import { useState } from 'react';

export default function App() {

  console.log("App Excecuted");
  const handlePress = () => console.log("Text Press");

  const [expanded, setExpanded] = useState(true);
  const [active, setActive] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress = {handlePress}>Gist</Text>
      <List active={active} 
        expanded={expanded} 
        setExpanded={setExpanded} 
        setActive={setActive} />
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
