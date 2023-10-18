import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { IStackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";
import { NavButtons } from "../components/NavButtons";
import { routeNames } from "../navigation/routeNames";

export const HomeScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { navigation } = props;

const names = routeNames.filter((rn, i) => i !== 0)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TIME IS ALL WE HAVE</Text>
      <NavButtons navigation={navigation} names={names}/>
      <StatusBar style="auto" />
    </View>
  );
};
