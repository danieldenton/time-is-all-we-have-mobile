import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { IStackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";
import { NavBar } from "../components/navbar/NavBar";
import { routeNames } from "../navigation/routeNames";

export const AboutScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { navigation } = props;

  const names = routeNames.filter((rn, i) => i !== 3)

  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} names={names} />
      <Text style={styles.text}>ABOUT</Text>
      <StatusBar style="auto" />
    </View>
  );
};
