import React from "react";
import { Button } from "react-native";
import { routes } from "../navigation/routes";
import { IStackScreenProps } from "../navigation/StackScreenProps";

export const NavButtons: React.FunctionComponent<IStackScreenProps> = (
  props
) => {
  const { navigation } = props;

  const navNames = routes.map((r, i) => {
    return r.name;
  });
  const navButtons = navNames.map((name, i) => {
    return (
      <Button
        key={i}
        title={name}
        onPress={() => {
          navigation.navigate(name);
        }}
      />
    );
  });
  return navButtons;
};
