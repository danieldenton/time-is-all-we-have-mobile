import React from "react";
import { SafeAreaView, Text, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { navProps } from "../navigation/navProps";
import { styles } from "../styles";
import { NavBar } from "../components/navigation/NavBar";

export const MeditationScreen = ({ navigation }: navProps) => {

  return (
    <SafeAreaView style={styles.container}>
      <NavBar navigation={navigation} screenName={"Meditation"}/>
      <Text style={styles.textHeader}>MEDITATION SCREEN</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
