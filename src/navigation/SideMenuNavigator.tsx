import { createDrawerNavigator } from "@react-navigation/drawer";
import { SideMenu } from "../components/sidemenu/SideMenu";
import { Navigation } from "./Navigation";

const SideMenuDrawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
//   return (
//     <SideMenuDrawer.Navigator
//       drawerContent={(props) => <SideMenu {...props} />}
//       initialRouteName="Home"
//       screenOptions={{ headerShown: false, swipeEdgeWidth: 0 }}
//     >
//       <SideMenuDrawer.Screen
//         name="Home"
//         component={Navigation}
//         options={{ drawerItemStyle: { height: 0 } }}
//       />
//     </SideMenuDrawer.Navigator>
//   )
};
