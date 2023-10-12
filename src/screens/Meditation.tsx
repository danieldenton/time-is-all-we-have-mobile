import React from "react";
import { View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { IStackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";

export const MeditationScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { navigation, route } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MEDITATION SCREEN</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Button
        title="Community"
        onPress={() => {
          navigation.navigate("Community");
        }}
      />
      <Button
        title="About"
        onPress={() => {
          navigation.navigate("About");
        }}
      />
      <Button
        title="Contact"
        onPress={() => {
          navigation.navigate("Contact");
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
};
