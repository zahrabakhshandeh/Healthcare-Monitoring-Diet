"use client";
import { useEffect, useRef } from "react";
import MainInput from "@/components/MainInput";
import UserProfile from "/public/profile-circle.svg";
import PasswordKey from "/public/passwordkey.svg";
import Link from "next/link";
import MainButton from "@/components/MainButton";
import LoginIcon from "/public/login-white.svg";
import {loginSchema} from '../../../../validation/loginValidation/index'

const FormLogin = () => {
  
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    usernameRef.current?.focus()
  },[])

  const handelEnter = (event: React.KeyboardEvent<HTMLFormElement>) =>{
    if(event.key === 'Enter'){
      if (document.activeElement === usernameRef.current && passwordRef.current){
        passwordRef.current.focus();
        event.preventDefault();
      } 
    }
  }

  const loginValidation = async(event: any) =>{
    event.preventDefault();
    let formData = {
      username: event.target[0].value,
      password: event.target[1].value
    }
    const isValid = await loginSchema.isValid(formData);
    console.log(formData);
    console.log(isValid);
  }

  return (
    <>
      <form action="" className="flex w-full flex-col gap-4" onKeyDown={(e: React.KeyboardEvent<HTMLFormElement>)=>handelEnter(e)} onSubmit={loginValidation}>
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
