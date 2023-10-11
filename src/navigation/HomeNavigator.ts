import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../HomeScreen";
import { CommunityScreen } from "../CommunityScreen";

const HomeStack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="CommunityScreen" component={CommunityScreen} />
    </HomeStack.Navigator>
  );
};
