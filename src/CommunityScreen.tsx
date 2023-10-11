import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const CommunityScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>COMMUNITY SCREEN</Text>
      <StatusBar style="auto" />
    </View>
  );
};
