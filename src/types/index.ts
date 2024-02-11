import { ButtonHTMLAttributes, FunctionComponent, InputHTMLAttributes } from "react";

export type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
  className?: string;
  iconSrc?: FunctionComponent;
};

export type TInput = InputHTMLAttributes<HTMLDivElement> & {
  className?: string;
  firstIconSrc?: FunctionComponent;
  ref?: any;
};

export interface ButtonPropsTypes {
  variant?: 'google' | 'apple';
}