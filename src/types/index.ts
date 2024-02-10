import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
  className?: string;
  iconSrc?: any;
};

export type TInput = InputHTMLAttributes<HTMLDivElement> & {
  className?: string;
  firstIconSrc?: any;
};

export interface ButtonPropsTypes {
  variant?: 'google' | 'apple';
}