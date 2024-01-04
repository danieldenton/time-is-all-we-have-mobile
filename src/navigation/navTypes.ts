import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootStackParamList";

export type HomeNavigationProps = NativeStackScreenProps<RootStackParamList, "Home">
export type MeditationNavigationProps = NativeStackScreenProps<RootStackParamList, "Meditation">
export type CommunityNavigationProps = NativeStackScreenProps<RootStackParamList, "Community">
export type AboutNavigationProps = NativeStackScreenProps<RootStackParamList, "About">
export type ContactNavigationProps = NativeStackScreenProps<RootStackParamList, "Contact">


