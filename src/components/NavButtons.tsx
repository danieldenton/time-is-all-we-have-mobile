import React from "react";
import { Button } from "react-native";
import { IStackScreenProps } from "../navigation/StackScreenProps";
import { IRouteNames } from "../navigation/routeNames";

export const NavButtons: React.FunctionComponent<any> = ({ navigation, names }) => {

  const navButtons = names.map((name: string, i: number) => {
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
