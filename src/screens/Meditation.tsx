import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { IStackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";
import { NavButtons } from "../components/NavButtons";
import { routeNames } from "../navigation/routeNames";

export const MeditationScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { navigation } = props;

  const names = routeNames.filter((rn, i) => i !== 1)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>MEDITATION SCREEN</Text>
      <NavButtons navigation={navigation} names={names} />
      <StatusBar style="auto" />
    </View>
  );
};
