import React from "react";
import { View, Text, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";
import { NavBar } from "../components/navbar/NavBar";

export const MeditationScreen = ({ navigation }: StackScreenProps) => {
  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} routeIndex={2} />
      <Text style={styles.text}>MEDITATION SCREEN</Text>
      <StatusBar style="auto" />
    </View>
  );
};
