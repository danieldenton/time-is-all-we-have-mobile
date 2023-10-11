import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HometNavigator } from "./AccountNavigator";

export const Navigation = () => {
    return (
        <NavigationContainer>
            <HometNavigator />
        </NavigationContainer>
    )
}