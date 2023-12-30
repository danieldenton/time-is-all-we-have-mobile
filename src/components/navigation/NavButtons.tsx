import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../../styles";
import { NavProps } from "../../navigation/NavProps";

export const NavButton = ({ route, navigation }: NavProps) => {
  
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(route);
        }}
        style={styles.buttons}
      >
        <Text style={styles.buttonFont}>{route}</Text>
      </TouchableOpacity>
    );
  };
