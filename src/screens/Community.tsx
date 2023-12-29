import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";
import { navProps } from "../navigation/navProps";
import { styles } from "../styles";
import { NavBar } from "../components/navigation/NavBar";

export const CommunityScreen = ({ navigation, screenName}: navProps) => {


  return (
    <SafeAreaView style={styles.container}>
      <NavBar navigation={navigation} screenName={"Community"} />
      <Text style={styles.textHeader}>COMMUNITY SCREEN</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
