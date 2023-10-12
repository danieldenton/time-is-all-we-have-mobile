import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";
import { IStackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";

export const ContactScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { navigation, route } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CONTACT</Text>
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
        title="About"
        onPress={() => {
          navigation.navigate("ABOUT");
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
};
