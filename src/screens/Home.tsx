import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable } from "react-native";
import { IStackScreenProps } from "../navigation/StackScreenProps";
import { routes } from "../navigation/routes";
import { styles } from "../styles";

export const HomeScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { navigation } = props;

  const navNames = routes.filter((r) => r.name !== "Home");

  const navButtons = navNames.map((r, i) => {
    return (
      <Pressable
        key={i}
        onPress={() => {
          navigation.navigate(r.name);
        }}
      >
        <Text>{r.name}</Text>
      </Pressable>
    );
  });


  return (
    <View style={styles.container}>
      <Text style={styles.text}>TIME IS ALL WE HAVE</Text>
      {navButtons}
      <StatusBar style="auto" />
    </View>
  );
};
