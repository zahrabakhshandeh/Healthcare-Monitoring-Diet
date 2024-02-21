import {
  ButtonHTMLAttributes,
  FunctionComponent,
  InputHTMLAttributes,
} from "react";

export type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
  className?: string;
  iconSrc?: FunctionComponent;
};

export type TInput = InputHTMLAttributes<HTMLDivElement> & {
  register?: any;
  className?: string;
  firsticonsrc?: FunctionComponent;
};

export interface ButtonPropsTypes {
  variant?: "google" | "apple";
}

export type SignUpDataType = {
  userID: string;
  username: string;
  password: string;
  passwordCheck: string;
  email: string;
};

export type LoginDataType = {
  username: string;
  password: string;
};
