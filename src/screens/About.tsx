import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";
import { IStackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";

export const AboutScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { navigation, route } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ABOUT</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Button
        title="Meditation"
        onPress={() => {
          navigation.navigate("Meditation");
        }}
      />
      <Button
        title="Community"
        onPress={() => {
          navigation.navigate("Community");
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
