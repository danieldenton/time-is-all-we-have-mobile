import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { IStackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";
import { NavButtons } from "../components/navbar/NavButtons";
import { routeNames } from "../navigation/routeNames";

export const CommunityScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { navigation } = props;

  const names = routeNames.filter((rn, i) => i !== 2);

  return (
    <View style={styles.container}>
      <NavButtons navigation={navigation} names={names} />
      <Text style={styles.text}>COMMUNITY SCREEN</Text>
      <StatusBar style="auto" />
    </View>
  );
};
