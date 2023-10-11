import { IRouteProps } from "./RouteProps";
import { HomeScreen } from "../HomeScreen";
import { CommunityScreen } from "../CommunityScreen";
import 'react-native-gesture-handler'

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