import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../styles";

type NavButtonProps = {
  navigation: { navigate: (name: string) => void };
  names: string[];
};

export const NavButtons = ({ navigation, names }: NavButtonProps) => {
  const navButtons = names.map((name: string, i: number) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(name);
        }}
        style={styles.buttons}
        key={i}
      >
        <Text style={styles.buttonFont}>{name}</Text>
      </TouchableOpacity>
    );
  });

  return navButtons;
};
