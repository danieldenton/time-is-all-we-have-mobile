import { FC } from "react";
import { StackScreenProps } from "./StackScreenProps";

export type RouteProps = {
  component: FC<StackScreenProps>
  name: string;
}