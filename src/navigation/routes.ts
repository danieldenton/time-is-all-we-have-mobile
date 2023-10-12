import { IRouteProps } from "./RouteProps";
import { HomeScreen } from "../screens/HomeScreen";
import { CommunityScreen } from "../screens/CommunityScreen";

export const routes: IRouteProps[] = [
    {
        name: "Home",
        component: HomeScreen
    },
    {
        name: "Community",
        component: CommunityScreen
    }
]