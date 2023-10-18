import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { IStackScreenProps } from "../navigation/StackScreenProps";
import { styles } from "../styles";

export const NavButtons: React.FunctionComponent<IStackScreenProps & any> = ({
  navigation,
  names,
}) => {
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
