"use client";
import MainInput from "@/components/MainInput";
import UserProfile from "/public/profile-circle.svg";
import PasswordKey from "/public/passwordkey.svg";
import Link from "next/link";
import MainButton from "@/components/MainButton";
import LoginIcon from "/public/login-white.svg";
import { useRef } from "react";

const FormLogin = () => {
  
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handelEnter = (event:any) =>{
    if(event.key === 'Enter'){
      if (document.activeElement === usernameRef.current && passwordRef.current){
        passwordRef.current.focus();
        event.preventDefault();
      } 
    }
  }
  return (
    <>
      <form action="" className="flex w-full flex-col gap-4" onKeyDown={handelEnter}>
        <MainInput
          ref={usernameRef}
          firstIconSrc={UserProfile}
          className="w-full"
          placeholder="نام کاربری"
        />
        <MainInput
          ref={passwordRef}
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
