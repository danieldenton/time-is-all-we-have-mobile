import React from "react";
import { View } from "react-native";
import { styles } from "../../styles";
import { NavButtons } from "./NavButtons";
import { navProps } from "../../navigation/navProps";

export const NavBar = ({ navigation, screenName }: navProps) => {
  return (
    <View style={styles.navButtonContainer}>
      <NavButtons navigation={navigation} screenName={screenName} />
    </View>
  );
};
