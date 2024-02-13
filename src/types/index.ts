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
  firstIconSrc?: FunctionComponent;
};

export interface ButtonPropsTypes {
  variant?: "google" | "apple";
}

export type SignUpDataType = {
  userid: string;
  username: string;
  pass: string;
  passagain: string;
  email: string;
};

export type LoginDataType = {
  username: string;
  pass: string;
};
