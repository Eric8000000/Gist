import { StatusBar } from "expo-status-bar";
import React from "react";
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
        style={{
          backgroundColor: "#AA767C",
          flex: 0.125,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 45 }}>Gist.</Text>
      </View>

      <View
        //MAIN SCREEN
        style={{
          backgroundColor: "#F9BFC6",
          flex: 1,
        }}
      ></View>

      <View
        //FOOTER
        style={{
          backgroundColor: "#F9BFC6",
          flex: 0.15,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            alignItems: "Center",
            justifyContent: "center",
          }}
        >
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
});
