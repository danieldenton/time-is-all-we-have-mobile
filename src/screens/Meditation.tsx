import React from "react";
import { SafeAreaView, Text, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { StackScreenProps } from "../navigation/RootStackParamsList";
import { styles } from "../styles";
import { NavBar } from "../components/navigation/NavBar";
import { routes } from "../navigation/routes";

export const MeditationScreen = ({ navigation }: StackScreenProps) => {
  const editedRoutes = routes.filter((r) => r.name === "Meditaion");
  return (
    <SafeAreaView style={styles.container}>
      <NavBar navigation={navigation} routes={editedRoutes} />
      <Text style={styles.textHeader}>MEDITATION SCREEN</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
