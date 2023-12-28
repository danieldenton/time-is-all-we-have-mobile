import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";
import { StackScreenProps } from "../navigation/RootStackParamsList";
import { styles } from "../styles";
import { NavBar } from "../components/navigation/NavBar";
import { routes } from "../navigation/routes";

export const HomeScreen = ({ navigation }: StackScreenProps) => {
  const editedRoutes = routes.filter((r) => r.name === "Home");

  return (
    <SafeAreaView style={styles.container}>
      <NavBar navigation={navigation} routes={editedRoutes} />
      <Text style={styles.textHeader}>TIME IS ALL WE HAVE</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
