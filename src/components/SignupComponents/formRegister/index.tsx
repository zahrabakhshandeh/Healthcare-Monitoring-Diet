"use client";
import MainInput from "@/components/MainInput";
import UserProfile from "/public/profile-circle.svg";
import MainButton from "@/components/MainButton";
import PasswordKey from "/public/passwordkey.svg";
import Email from "/public/email.svg";
import ID from "/public/id.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import SignUp from "/public/signup-white.svg";
import { useEffect, useRef } from "react";
import useRegister, {
  SignUpSchema,
} from "../../../validation/signupValidation/useRegister";
import { Controller, useForm } from "react-hook-form";

const FormRegister = () => {
  const userIdRef = useRef<HTMLInputElement | null>(null);
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const passwordAgainRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const inputRefs = [
    userIdRef,
    usernameRef,
    passwordRef,
    passwordAgainRef,
    emailRef,
  ];

  const handleEnter = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      for (let i = 0; i < inputRefs.length; i++) {
        if (document.activeElement === inputRefs[i].current) {
          if (inputRefs[i + 1]?.current) {
            inputRefs[i + 1].current?.focus();
            event.preventDefault();
          }
          break;
        }
      }
    }
  };

  const { control, errors, handelValueInputs, handleSubmit, register } =
    useRegister();

  useEffect(() => {
    userIdRef.current?.focus();
    if (errors.userID) {
      userIdRef.current?.focus();
    } else if (errors.username) {
      usernameRef.current?.focus();
    } else if (errors.password) {
      passwordRef.current?.focus();
    } else if (errors.passwordCheck) {
      passwordAgainRef.current?.focus();
    } else if (errors.email) {
      emailRef.current?.focus();
    }
  }, [
    errors.password,
    errors.passwordCheck,
    errors.email,
    errors.userID,
    errors.username,
  ]);

  return (
    <form
      onSubmit={handleSubmit(handelValueInputs)}
      onKeyDown={handleEnter}
      className="flex w-full flex-col gap-4"
    >
      <Controller
        control={control}
        name="userID"
        render={({ field }) => (
          <MainInput
            type="text"
            className={`w-full ${errors.userID && "border border-red-600"}`}
            firsticonsrc={ID}
            placeholder="کد ملی"
            {...field}
            ref={userIdRef}
          />
        )}
      />

      <Controller
        control={control}
        name="username"
        render={({ field }) => (
          <MainInput
            className={`w-full ${
              errors.username && !errors.userID && "border border-red-600"
            }`}
            type="text"
            firsticonsrc={UserProfile}
            placeholder="نام و نام خانوادگی"
            {...field}
            ref={usernameRef}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <MainInput
            type="password"
            className={`w-full ${
              errors.password &&
              !errors.username &&
              !errors.userID &&
              "border border-red-600"
            }`}
            firsticonsrc={PasswordKey}
            placeholder="رمز عبور"
            {...field}
            ref={passwordRef}
          />
        )}
      />

      <Controller
        control={control}
        name="passwordCheck"
        render={({ field }) => (
          <MainInput
            type="password"
            className={`w-full ${
              errors.passwordCheck &&
              !errors.password &&
              !errors.username &&
              !errors.userID &&
              "border border-red-600"
            }`}
            firsticonsrc={PasswordKey}
            placeholder="رمز عبور"
            {...field}
            ref={passwordAgainRef}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <MainInput
            className={`w-full ${
              errors.email &&
              !errors.password &&
              !errors.passwordCheck &&
              !errors.username &&
              !errors.userID &&
              "border border-red-600"
            }`}
            type="text"
            firsticonsrc={Email}
            placeholder="ایمیل"
            {...field}
            ref={emailRef}
          />
        )}
      />
      <MainButton
        type="submit"
        className="w-full shadow-button-green h-16 bg-[var(--green-btn)]"
        iconSrc={SignUp}
        value={"ثبت نام"}
      />
    </form>
  );
};
export default FormRegister;
