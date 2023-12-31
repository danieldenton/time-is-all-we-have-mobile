import { IRouteProps } from "./RouteProps";
import { HomeScreen } from "../screens/Home";
import { CommunityScreen } from "../screens/Community";
import { MeditationScreen } from "../screens/Meditation";
import { AboutScreen } from "../screens/About";
import { ContactScreen } from "../screens/Contact";

export const routes: IRouteProps[] = [
    {
        name: "Home",
        component: HomeScreen
    },
    {
        name: "Community",
        component: CommunityScreen
    },
    {
        name: "Meditation",
        component: MeditationScreen
    },
    {
        name: "About",
        component: AboutScreen
    },
    {
        name: "Contact",
        component: ContactScreen
    }
]