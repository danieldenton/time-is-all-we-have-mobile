import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { StackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";
import { NavBar } from "../components/navbar/NavBar";

export const HomeScreen = ({ navigation} : StackScreenProps) => {

  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} routeIndex={0} />
      <Text style={styles.textHeader}>TIME IS ALL WE HAVE</Text>
      <StatusBar style="auto" />
    </View>
  );
};
