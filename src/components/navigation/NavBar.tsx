import React from "react";
import { View } from "react-native";
import { styles } from "../../styles";
import { NavButton } from "./NavButtons";
import { NavProps } from "../../navigation/NavProps";

export const NavBar = ({ route, navigation}: NavProps) => {
  // const routes = [Home, Medtation,]

  // const navButtons = routes.map((screen, idx) => {
  //   return (<NavButton route={screen} navigation={navigation}/>
  //   )
  // })

  return (
    <View style={styles.navButtonContainer}>
      
    </View>
  );
};
