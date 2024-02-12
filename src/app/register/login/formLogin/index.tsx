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

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

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

  return (
    <>
      <form action="" className="flex w-full flex-col gap-4" onSubmit={handleSubmit(onSubmit)} onKeyDown={handelEnter}>
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <MainInput
              firstIconSrc={UserProfile}
              className="w-full"
              placeholder="نام کاربری"
              {...field}
              ref={usernameRef}
            />
          )}
        />
        {errors.username && <p className='text-[var(--red)]'>{errors.username.message}</p>}

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <MainInput
              firstIconSrc={PasswordKey}
              type="password"
              placeholder="رمز عبور"
              {...field}
              ref={passwordRef}
            />
          )}
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
        {errors.password && <p className='text-[var(--red)]'>{errors.password.message}</p>}

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