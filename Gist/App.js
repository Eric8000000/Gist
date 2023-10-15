import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import List from './components/List.js';
import { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
} from "react-native";

export default function App() {
  console.log("App Excecuted");
  const handlePress = () => console.log("Text Press");

  const [expanded, setExpanded] = useState(true);
  const [active, setActive] = useState(true);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#F9BFC6",
        flex: 1,
      }}
    >
      <StatusBar> </StatusBar>
      <View
        //HEADER
        style={styles.header}
      >
        <Text style={{ fontSize: 45 }}>Gist.</Text>
      </View>

      <View
        //MAIN SCREEN
        style={styles.main}
      > 
        <List active={active} 
          expanded={expanded} 
          setExpanded={setExpanded} 
          setActive={setActive} />
      </View>

      <View
        //FOOTER
        style={styles.footer}
      >
        <View style={styles.addContainer}>
          <Button
            title="Add New List"
            onPress={() => console.log("Bruh")}
            color="#AA767C"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    backgroundColor: "#AA767C",
    flex: 0.125,
    justifyContent: "center",
  },

  footer: {
    backgroundColor: "#F9BFC6",
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },

  addContainer: {
    width: 100,
    height: 100,
    alignItems: "Center",
    justifyContent: "center",
  },

  main: {
    backgroundColor: "#F9BFC6",
    flex: 1,
  },
});
