import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../../styles";
import { navProps } from "../../navigation/navProps";

export const NavButtons = ({ navigation, screenName }: navProps) => {
  const routes: string[] = ["Home", "Meditation", "Community", "About", "Contact"]
  const editedRoutes = routes.filter((route) => route !== screenName)

  const navButtons = editedRoutes.map((name, i) => {
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
