import React from "react";
import { View, Text, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import { IStackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";
import { NavBar } from "../components/navbar/NavBar";
import { routeNames } from "../navigation/routeNames";

export const MeditationScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { navigation } = props;

  const names = routeNames.filter((rn, i) => i !== 1)

  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} names={names} />
      <Text style={styles.text}>MEDITATION SCREEN</Text>
      <StatusBar style="auto" />
    </View>
  );
};
