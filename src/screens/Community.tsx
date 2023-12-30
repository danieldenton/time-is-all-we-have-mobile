import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";
import { styles } from "../styles";
import { NavBar } from "../components/navigation/NavBar";

export const CommunityScreen = () => {


  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <Text style={styles.textHeader}>COMMUNITY SCREEN</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
