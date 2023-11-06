import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  customStyle?: string;
  handelClick?: MouseEventHandler<HTMLButtonElement>;
}
