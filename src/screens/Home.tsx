import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { IStackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";
import { NavBar } from "../components/navbar/NavBar";

export const HomeScreen = ({ navigation} : IStackScreenProps) => {

  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} routeIndex={0} />
      <Text style={styles.text}>TIME IS ALL WE HAVE</Text>
      <StatusBar style="auto" />
    </View>
  );
};
