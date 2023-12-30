import React from "react";
import { SafeAreaView, Text, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../styles";
import { NavBar } from "../components/navigation/NavBar";

export const MeditationScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <NavBar />
      <Text style={styles.textHeader}>MEDITATION SCREEN</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
