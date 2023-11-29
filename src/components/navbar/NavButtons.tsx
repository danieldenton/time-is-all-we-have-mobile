import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../../styles";
import { NavButtonProps } from "./NavButtonProps";
import { routes } from "../../navigation/routes";

export const NavButtons = ({ navigation, routeIndex }: NavButtonProps) => {
  const routeNames: string[] = routes
    .filter((r, i) => i !== routeIndex)
    .map((route, i) => {
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
