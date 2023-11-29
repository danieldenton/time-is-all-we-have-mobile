import React from "react";
import { View } from "react-native";
import { styles } from "../../styles";
import { NavButtons } from "./NavButtons";
import { NavButtonProps } from "./NavButtonProps";

export const NavBar = ({ navigation, routeIndex }: NavButtonProps) => {
  return (
    <View style={styles.navButtonContainer}>
      <NavButtons navigation={navigation} routeIndex={routeIndex} />
    </View>
  );
};
