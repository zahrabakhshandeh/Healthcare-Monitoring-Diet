"use client";
import MainInput from "@/components/MainInput";
import Link from "next/link";
import UserProfile from "/public/profile-circle.svg";
import MainButton from "@/components/MainButton";
import PasswordKey from "/public/passwordkey.svg";
import Email from "/public/email.svg";
import ID from "/public/id.svg";
import SignUp from "/public/signup-white.svg";
import { useEffect, useRef } from "react";
import useRegister from "../useRegister";

const FormRegister = () => {
  const userIdRef = useRef<HTMLInputElement>(null);
  // const usernameRef = useRef<HTMLInputElement>(null);
  // const passwordRef = useRef<HTMLInputElement>(null);
  // const passwordAgainRef = useRef<HTMLInputElement>(null);
  // const emailRef = useRef<HTMLInputElement>(null);

  const { handleSubmit, handelValueInputs, register } = useRegister();

  useEffect(() => {
    userIdRef.current?.focus();
  }, []);

  // const handelEnter = (event: React.KeyboardEvent<HTMLFormElement>) => {
  //   console.log(event, usernameRef);
  //   if (event.key === "Enter") {
  //     if (userIdRef.current === event.target) {
  //       event.preventDefault();
  //       usernameRef.current?.focus();
  //     }
  //     if (usernameRef.current === event.target) {
  //       event.preventDefault();
  //       passwordRef.current?.focus();
  //     }
  //     if (passwordRef.current === event.target) {
  //       event.preventDefault();
  //       passwordAgainRef.current?.focus();
  //     }
  //     if (passwordAgainRef.current === event.target) {
  //       event.preventDefault();
  //       emailRef.current?.focus();
  //     }
  //   }
  // };

  return (
    <form
      action=""
      onSubmit={handleSubmit(handelValueInputs)}
      // onKeyDown={(e: React.KeyboardEvent<HTMLFormElement>) => handelEnter(e)}
      className="flex w-full flex-col gap-4"
    >
      <MainInput
        type="text"
        // ref={userIdRef}
        register={register("userid")}
        className="w-full"
        firstIconSrc={ID}
        placeholder="کد ملی"
      />
      <MainInput
        className="w-full"
        // ref={usernameRef}
        register={register("username")}
        type="text"
        firstIconSrc={UserProfile}
        placeholder="نام و نام خانوادگی"
      />
      <MainInput
        // ref={passwordRef}
        register={register("pass")}
        type="password"
        className="w-full"
        firstIconSrc={PasswordKey}
        placeholder="رمز عبور"
      />
      <MainInput
        // ref={passwordAgainRef}
        register={register("passagain")}
        type="password"
        className="w-full"
        firstIconSrc={PasswordKey}
        placeholder="تکرار رمز عبور"
      />
      <MainInput
        // ref={emailRef}
        register={register("email")}
        type="email"
        className="w-full"
        firstIconSrc={Email}
        placeholder="ایمیل"
      />
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
