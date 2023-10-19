import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../styles";

export const NavButtons = (props: {
  navigation: { navigate: (name: string) => void };
  names: string[];
}) => {
  const navButtons = props.names.map((name: string, i: number) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(name);
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
