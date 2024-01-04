import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";
import { styles } from "../styles";
import { NavBar } from "../components/navigation/NavBar";


export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <NavBar navigation={navigation} /> */}
      <Text style={styles.textHeader}>TIME IS ALL WE HAVE</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
