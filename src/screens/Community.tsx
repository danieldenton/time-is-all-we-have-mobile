import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { StackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";
import { NavBar } from "../components/navigation/NavBar";
import { routes } from "../navigation/routes";

export const CommunityScreen = ({ navigation }: StackScreenProps) => {
  const editedRoutes = routes.filter((r, i) => i !== 2);

  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} routes={editedRoutes} />
      <Text style={styles.textHeader}>COMMUNITY SCREEN</Text>
      <StatusBar style="auto" />
    </View>
  );
};
