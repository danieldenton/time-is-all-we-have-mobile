import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../../styles";
import { ScreenNavigationProp, ScreenRouteProp } from "../../navigation/navTypes";

export const NavButton = ({ navigation }: ScreenNavigationProp) => {
  
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
