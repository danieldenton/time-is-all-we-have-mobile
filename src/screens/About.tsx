import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";
import { navProps } from "../navigation/navProps";
import { styles } from "../styles";
import { NavBar } from "../components/navigation/NavBar";

export const AboutScreen = ({ navigation }: navProps) => {

  return (
    <SafeAreaView style={styles.container}>
      <NavBar navigation={navigation} />
      <Text style={styles.textHeader}>ABOUT</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
