"use client";
import { useEffect, useRef } from "react";
import MainInput from "@/components/MainInput";
import UserProfile from "/public/profile-circle.svg";
import PasswordKey from "/public/passwordkey.svg";
import Link from "next/link";
import MainButton from "@/components/MainButton";
import LoginIcon from "/public/login-white.svg";
import {loginSchema} from '../../../../validation/loginValidation/index'
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";


const FormLogin = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <form action="" className="flex w-full flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <MainInput
              firstIconSrc={UserProfile}
              className="w-full"
              placeholder="نام کاربری"
              {...field}
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
            />
          )}
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