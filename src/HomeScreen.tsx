import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";
import { styles } from "./styles";
import { IStackScreenProps } from "./navigation/StackScreenProps";

export const HomeScreen: React.FunctionComponent<IStackScreenProps> = props => {
  const { navigation, route } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TIME IS ALL WE HAVE</Text>
      <Button title="ENTER" onPress={navigation.navigate(route)}/>
      <StatusBar style="auto" />
    </View>
  );
};
