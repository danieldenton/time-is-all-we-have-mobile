import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";
import { styles } from "../styles";
import { NavBar } from "../components/navigation/NavBar";

export const AboutScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      {/* <NavBar /> */}
      <Text style={styles.textHeader}>ABOUT</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
