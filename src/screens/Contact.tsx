import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable } from "react-native";
import { IStackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";
import { routes } from "../navigation/routes";

export const ContactScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { navigation } = props;

  const navNames = routes.filter((r) => r.name !== "Contact");

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
      <Text style={styles.text}>CONTACT</Text>
      {navButtons}
      <StatusBar style="auto" />
    </View>
  );
};
