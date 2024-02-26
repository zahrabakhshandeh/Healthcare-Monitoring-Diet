"use client";
import { useEffect, useRef } from "react";
import MainInput from "@/components/MainInput";
import UserProfile from "/public/profile-circle.svg";
import PasswordKey from "/public/passwordkey.svg";
import MainButton from "@/components/MainButton";
import { Controller} from "react-hook-form";
import useLogin from "@/validation/loginValidation/useLogin";

const FormLogin = () => {
  const { control, handelValueInputs,errors, handleSubmit } = useLogin();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    usernameRef.current?.focus();
    if(errors.username){
      usernameRef.current?.focus()
    }
    if(errors.password && !errors.username){
      passwordRef.current?.focus()
    }
  }, [errors.username , errors.password]);

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
        className="flex w-full flex-col gap-6 "
        onSubmit={handleSubmit(handelValueInputs)}
        onKeyDown={handleEnter}
      >
        <Controller
          control={control}
          name="username"
          render={({ field }) => (
            <MainInput 
              firsticonsrc={UserProfile}
              className={`w-full ${errors.username && 'border border-red-600'}`}
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
              className={`${(errors.password && !errors.username)&& 'border border-red-600'}`}
              placeholder="رمز عبور"
              {...field}
              ref={passwordRef}
            />
          )}
        />
          <MainButton className="h-16 bg-[var(--orange-color)]"
            value={"ورود"}
          />
      </form>
    </>
  );
};
export default FormLogin;