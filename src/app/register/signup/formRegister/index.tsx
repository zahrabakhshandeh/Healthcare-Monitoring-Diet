"use client";
import MainInput from "@/components/MainInput";
import Link from "next/link";
import UserProfile from "/public/profile-circle.svg";
import MainButton from "@/components/MainButton";
import PasswordKey from "/public/passwordkey.svg";
import Email from "/public/email.svg";
import ID from "/public/id.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import SignUp from "/public/signup-white.svg";
import { useEffect, useRef } from "react";
import useRegister from "../../../../validation/signupValidation/useRegister";
import { Controller, useForm } from "react-hook-form";
import { SignUpDataType } from "@/types";
import { toast } from "react-toastify";

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
  }, []);

  return (
    <form
      onSubmit={handleSubmit(handelValueInputs)}
      onKeyDown={handleEnter}
      className="flex w-full flex-col gap-4"
    >
      <Controller
        control={control}
        name="userid"
        render={({ field }) => (
          <MainInput
            type="text"
            className="w-full"
            firstIconSrc={ID}
            placeholder="کد ملی"
            {...field}
            ref={userIdRef}
          />
        )}
      />
      {errors.userid && (
        <p className="text-[var(--red)]">{errors.userid.message}</p>
      )}

      <Controller
        control={control}
        name="username"
        render={({ field }) => (
          <MainInput
            className="w-full"
            type="text"
            firstIconSrc={UserProfile}
            placeholder="نام و نام خانوادگی"
            {...field}
            ref={usernameRef}
          />
        )}
      />
      {errors.username && (
        <p className="text-[var(--red)]">{errors.username.message}</p>
      )}

      <Controller
        control={control}
        name="pass"
        render={({ field }) => (
          <MainInput
            type="password"
            className="w-full"
            firstIconSrc={PasswordKey}
            placeholder="رمز عبور"
            {...field}
            ref={passwordRef}
          />
        )}
      />
      {errors.pass && (
        <p className="text-[var(--red)]">{errors.pass.message}</p>
      )}

      <Controller
        control={control}
        name="passagain"
        render={({ field }) => (
          <MainInput
            type="password"
            className="w-full"
            firstIconSrc={PasswordKey}
            placeholder="رمز عبور"
            {...field}
            ref={passwordAgainRef}
          />
        )}
      />
      {errors.passagain && (
        <p className="text-[var(--red)]">{errors.passagain.message}</p>
      )}

      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <MainInput
            className="w-full"
            type="email"
            firstIconSrc={Email}
            placeholder="ایمیل"
            {...field}
            ref={emailRef}
          />
        )}
      />
      {errors.email && (
        <p className="text-[var(--red)]">{errors.email.message}</p>
      )}

      <section className="flex flex-row-reverse mt-[2.625rem] items-center justify-between">
        <MainButton
          type="submit"
          className="w-52 "
          iconSrc={SignUp}
          value={"ثبت نام"}
        />
        <Link href={"/register/login"}>
          <p className="text-lg text-[var(--primary-blue)]">
            قبلا ثبت نام کردید؟
          </p>
        </Link>
      </section>
    </form>
  );
};

export default FormRegister;
