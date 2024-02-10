"use client";
import MainInput from "@/components/MainInput";
import UserProfile from "/public/profile-circle.svg";
import PasswordKey from "/public/passwordkey.svg";
import Link from "next/link";
import MainButton from "@/components/MainButton";
import LoginIcon from "/public/login-white.svg";

const FormLogin = () => {
  return (
    <>
      <form action="" className="flex w-full flex-col gap-4">
        <MainInput
          firstIconSrc={UserProfile}
          className="w-full"
          placeholder="نام کاربری"
        />
        <MainInput
          firstIconSrc={PasswordKey}
          type="password"
          placeholder="رمز عبور"
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
