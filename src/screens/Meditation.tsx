import React from "react";
import { View, Text, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { IStackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";
import { NavBar } from "../components/navbar/NavBar";

export const MeditationScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} routeIndex={1} />
      <Text style={styles.text}>MEDITATION SCREEN</Text>
      <StatusBar style="auto" />
    </View>
  );
};
