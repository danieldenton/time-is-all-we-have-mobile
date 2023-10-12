import { IRouteProps } from "./RouteProps";
import { HomeScreen } from "../HomeScreen";
import { CommunityScreen } from "../CommunityScreen";

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