import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp, ParamListBase } from "@react-navigation/native";

export type StackScreenProps = {
    navigation: NativeStackNavigationProp<any>
    route: RouteProp<ParamListBase, any>
}
