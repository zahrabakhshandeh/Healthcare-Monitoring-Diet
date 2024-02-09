"use client";
import MainInput from "@/components/MainInput";
import Link from "next/link";
import UserProfile from "/public/profile-circle.svg";
import MainButton from "@/components/MainButton";
import PasswordKey from "/public/passwordkey.svg";
import Email from "/public/email.svg";
import ID from "/public/id.svg";
import SignUp from '/public/signup-icon.svg'

const FormRegister = () => {
  return (
    <form action="" className="flex w-full flex-col gap-4">
      <MainInput className="w-full" firstIconSrc={ID} placeholder="کد ملی" />
      <MainInput
        className="w-full"
        firstIconSrc={UserProfile}
        placeholder="نام و نام خانوادگی"
      />
      <MainInput
        className="w-full"
        firstIconSrc={PasswordKey}
        placeholder="رمز عبور"
      />
      <MainInput
        className="w-full"
        firstIconSrc={PasswordKey}
        placeholder="تکرار رمز عبور"
      />
      <MainInput className="w-full" firstIconSrc={Email} placeholder="ایمیل" />
      <section className="flex flex-row-reverse items-center justify-between">
        <MainButton className="w-52 " iconSrc={SignUp} value={"ثبت نام"} />
        <Link href={"/"}>
          <p className="text-lg text-[var(--primary-blue)]">
            قبلا ثبت نام کردید؟
          </p>
        </Link>
      </section>
    </form>
  );
};

export default FormRegister;
