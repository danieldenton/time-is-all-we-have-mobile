import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";
import { styles } from "../styles";
import { IStackScreenProps } from "../navigation/StackScreenProps";

export const HomeScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { navigation, route } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TIME IS ALL WE HAVE</Text>
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
