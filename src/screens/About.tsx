import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";
import { StackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";
import { NavBar } from "../components/navigation/NavBar";
import { routes } from "../navigation/routes";

export const AboutScreen = ({ navigation }: StackScreenProps) => {
  const editedRoutes = routes.filter((r, i) => i !== 3);

  return (
    <SafeAreaView style={styles.container}>
      <NavBar navigation={navigation} routes={editedRoutes} />
      <Text style={styles.textHeader}>ABOUT</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
