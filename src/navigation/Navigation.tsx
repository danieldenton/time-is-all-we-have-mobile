import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamsList } from "./StackScreenProps";
import { HomeScreen } from "../screens/Home";
import { MeditationScreen } from "../screens/Meditation";
import { CommunityScreen } from "../screens/Community";
import { AboutScreen } from "../screens/About";

const Stack = createNativeStackNavigator<RootStackParamsList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Meditation" component={MeditationScreen} />
        <Stack.Screen name="Community" component={CommunityScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
