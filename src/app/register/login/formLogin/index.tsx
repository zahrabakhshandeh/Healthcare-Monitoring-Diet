"use client";
import { useEffect, useRef } from "react";
import MainInput from "@/components/MainInput";
import UserProfile from "/public/profile-circle.svg";
import PasswordKey from "/public/passwordkey.svg";
import Link from "next/link";
import MainButton from "@/components/MainButton";
import LoginIcon from "/public/login-white.svg";
import useLogin from "../../../../validation/loginValidation/useLogin"
import { Controller, useForm } from "react-hook-form"

const FormLogin = () => {
  const { control, handelValueInputs, handleSubmit } = useLogin();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  const inputRefs = [usernameRef, passwordRef];

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

  return (
    <>
      <form
        action=""
        className="flex w-full flex-col gap-4"
        onSubmit={handleSubmit(handelValueInputs)}
        onKeyDown={handleEnter}
      >
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <MainInput
              firsticonsrc={UserProfile}
              className="w-full"
              placeholder="نام کاربری"
              {...field}
              ref={usernameRef}
            />
          )}
        />

        <Controller
          control={control}
          name="pass"
          render={({ field }) => (
            <MainInput
              firsticonsrc={PasswordKey}
              type="password"
              placeholder="رمز عبور"
              {...field}
              ref={passwordRef}
            />
          )}
        />

        <div className="flex flex-row gap-10 pt-7 items-center">
          <Link href="/" className="text-[var(--primary-blue)]">
            رمز عبورتون رو فراموش کردید؟
          </Link>
          <MainButton
            iconSrc={LoginIcon}
            className="w-44 font-bold"
            value={"ورود"}
          />
        </div>
      </form>
    </>
  );
};
export default FormLogin;
