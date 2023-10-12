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
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Button
        title="Meditaion"
        onPress={() => {
          navigation.navigate("Meditation");
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
