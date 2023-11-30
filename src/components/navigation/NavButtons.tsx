import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../../styles";
import { NavButtonProps } from "./NavButtonProps";

export const NavButtons = ({ navigation, routes }: NavButtonProps) => {
  const routeNames = routes.map((route) => {
      return route.name;
    });

  const navButtons = routeNames.map((name, i) => {
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
