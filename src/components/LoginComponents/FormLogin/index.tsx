"use client";
import { useEffect, useRef } from "react";
import MainInput from "@/components/MainInput";
import UserProfile from "/public/profile-circle.svg";
import PasswordKey from "/public/passwordkey.svg";
import MainButton from "@/components/MainButton";
import { Controller } from "react-hook-form";
import useLogin from "@/validation/loginValidation/useLogin";
import Link from "next/link";

const FormLogin = () => {
  const { control, handelValueInputs, errors, handleSubmit } = useLogin();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    usernameRef.current?.focus();
    if (errors.username) {
      usernameRef.current?.focus();
    }
    if (errors.password && !errors.username) {
      passwordRef.current?.focus();
    }
  }, [errors.username, errors.password]);

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
        className="flex w-full md:grid md:grid-cols-2 lg:flex lg:flex-col flex-col gap-6  "
        onSubmit={handleSubmit(handelValueInputs)}
        onKeyDown={handleEnter}
      >
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <MainInput
              firsticonsrc={UserProfile}
              className={`w-full ${errors.username && "border border-red-600"}`}
              placeholder="نام کاربری"
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
              firsticonsrc={PasswordKey}
              type="password"
              className={`${
                errors.password && !errors.username && "border border-red-600"
              }`}
              placeholder="رمز عبور"
              {...field}
              ref={passwordRef}
            />
          )}
        />
        <section className=" col-span-2 w-full grid lg:grid-cols-1 grid-cols-1 md:grid-cols-2 items-center gap-6">
          <MainButton
            className="h-16 shadow-button-orange  bg-[var(--orange-color)]"
            value={"ورود"}
          />
          <Link
            href=""
            className="text-[var(--link-blue)] w-fit md:text-center lg:text-right text-base "
          >
            رمز عبورتون رو فراموش کردید؟
          </Link>
        </section>
      </form>
    </>
  );
};
export default FormLogin;
