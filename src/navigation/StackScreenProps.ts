import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackScreenProps = {
  nameProps: string;
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<ParamListBase, any>;
};

export type RootStackParamsList = {
  Home: undefined
  Meditation: undefined
  Community: undefined
  About: undefined
  Contact: undefined
}
