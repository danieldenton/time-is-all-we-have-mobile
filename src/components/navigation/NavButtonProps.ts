import { RouteProps } from "../../navigation/RouteProps";

export type NavButtonProps = {
    navigation: { navigate: (name: string) => void };
    routes: RouteProps[]
  };
