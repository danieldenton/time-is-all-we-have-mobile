import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { routes } from "./routes";
import { HomeScreen } from "../screens/Home";
import { MeditationScreen } from "../screens/Meditation";
import { CommunityScreen } from "../screens/Community";
import { ContactScreen } from "../screens/Contact";
import { AboutScreen } from "../screens/About";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    // <NavigationContainer>
    // <Stack.Navigator initialRouteName={"Home"}>
    //   {routes.map((r, i) => (
    //     <Stack.Screen key={i} name={r.name}>
    //       {(props) => <r.component nameProps={r.name} {...props} />}
    //     </Stack.Screen>
    //   ))}
    // </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Meditation" component={MeditationScreen} />
        <Stack.Screen name="Community" component={CommunityScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
