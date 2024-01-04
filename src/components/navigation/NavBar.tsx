import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../../styles";
import { StackScreenProps} from "../../navigation/StackScreenProps";


export const NavBar = ({ navigation, route }: StackScreenProps) => {

    const routes = ["Home", "Mediation", "Community"]

    const buttons = routes.map((route) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(route);
            }}
            style={styles.buttons}
          >
            <Text style={styles.buttonFont}>Home</Text>
          </TouchableOpacity>
        );
      })
      
  return { buttons };
};
