import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable } from "react-native";
import { IStackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";

export const CommunityScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>COMMUNITY SCREEN</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>HOME</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Meditation");
        }}
      >
        <Text>MEDITATION</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Contact");
        }}
      >
        <Text>CONTACT</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("About");
        }}
      >
        <Text>ABOUT</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
};
