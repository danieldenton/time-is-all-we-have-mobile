import React from "react";
import { View, Text, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { IStackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";

export const MeditationScreen: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>MEDITATION SCREEN</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text>HOME</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Community");
        }}
      >
        <Text>COMMUNITY</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("About");
        }}
      >
        <Text>ABOUT</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("Contact");
        }}
      >
        <Text>CONTACT</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
};
