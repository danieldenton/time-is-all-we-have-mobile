import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "./StackParamList";

export type NavProps = NativeStackScreenProps<StackParamList, "Home">

// {
//     HomeNavProps: NativeStackScreenProps<StackParamList>;
//     MeditationNavProps: NativeStackScreenProps<StackParamList>;
//     CommunityNavProps: NativeStackScreenProps<StackParamList, "Community">;
//     AboutNavProps: NativeStackScreenProps<StackParamList, "About">;
//     ContactNavProps: NativeStackScreenProps<StackParamList, "Contact">;
//   };

// export type NavButtonProps = {
//     route: string
//     navigation: { navigate: (route: string) => void }
// }