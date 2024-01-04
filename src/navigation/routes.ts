import { AboutScreen } from "../screens/About";
import { CommunityScreen } from "../screens/Community";
import { ContactScreen } from "../screens/Contact";
import { HomeScreen } from "../screens/Home";
import { MeditationScreen } from "../screens/Meditation";
import { RouteProps } from "./RouteProps";

export const navbarRoutes: RouteProps[] = [
  {
    name: "Home",
    component: HomeScreen,
  },
  {
    name: "Meditation",
    component: MeditationScreen,
  },
  {
    name: "Community",
    component: CommunityScreen,
  },
];

export const footerNavRoutes: RouteProps[] = [
  {
    name: "About",
    component: AboutScreen,
  },
  {
    name: "Contact",
    component: ContactScreen,
  },
];
