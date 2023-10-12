import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";
import { IStackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";

export const CommunityScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { navigation, route } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>COMMUNITY SCREEN</Text>
      <Button
        title="MEDITATE"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Button
        title="MEDITATE"
        onPress={() => {
          navigation.navigate("Meditation");
        }}
      />
      <Button
        title="MEDITATE"
        onPress={() => {
          navigation.navigate("About");
        }}
      />
      <Button
        title="MEDITATE"
        onPress={() => {
          navigation.navigate("Contact");
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
};
