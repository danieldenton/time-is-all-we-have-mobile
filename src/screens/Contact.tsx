import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { IStackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";
import { NavBar } from "../components/navbar/NavBar";
import { routeNames } from "../navigation/routeNames";

export const ContactScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { navigation } = props;

  const names = routeNames.filter((rn, i) => i !== 4)

  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} names={names} />
      <Text style={styles.text}>CONTACT</Text>
      <StatusBar style="auto" />
    </View>
  );
};
