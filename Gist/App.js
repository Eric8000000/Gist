import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import List from "./components/List.js";
import React, { useState, useEffect } from "react";
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

  //states for lists
  //add lists, delete lists
  //when list is clicked, expended is true
  const [expanded, setExpanded] = useState(true);
  const [active, setActive] = useState(true);

  //loads the font
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "Kadwa-Regular": require("./assets/fonts/Kadwa-Regular.ttf"),
        "Kalam-Light": require("./assets/fonts/Kalam-Light.ttf"),
      });

      //Text.defaultProps.style.fontFamily = "custom-font";
    }

    loadFont();
  }, []);

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
        <Text style={{ fontSize: 45, fontFamily: "Kadwa-Regular" }}>Gist.</Text>
      </View>

      <View
        //MAIN SCREEN
        style={styles.main}
      >
        <List
          active={active}
          expanded={expanded}
          setExpanded={setExpanded}
          setActive={setActive}
        />
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
