import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeNavigator } from "./HomeNavigator";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};
