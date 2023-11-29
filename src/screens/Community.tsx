import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { IStackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";
import { NavBar } from "../components/navbar/NavBar";

export const CommunityScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} routeIndex={2} />
      <Text style={styles.text}>COMMUNITY SCREEN</Text>
      <StatusBar style="auto" />
    </View>
  );
};
