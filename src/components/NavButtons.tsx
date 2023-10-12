import React from "react";
import { Button } from "react-native";
import { routes } from "../navigation/routes";
import { IStackScreenProps } from "../navigation/StackScreenProps";

export const NavButtons: React.FunctionComponent<IStackScreenProps> = (
    props
  ) => {
    const { navigation } = props;
        const navButtons = routes.map((r, i) => {
            return (
              <Button
                key={i}
                title={r.name}
                onPress={() => {
                  navigation.navigate(r.name);
                }}
              />
            );
          });
    return navButtons
  }