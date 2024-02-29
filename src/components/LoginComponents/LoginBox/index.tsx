import Link from "next/link";
import FormLogin from "@/components/LoginComponents/FormLogin";
import LoginByButton from "@/components/LoginComponents/LoginOptiontsButton";
import styles from "./styles.module.css";

const LoginBox = () => {
  return (
    <div
      className={`${styles.SignupBox}  rounded-[3.4rem] bg-white left-0 z-20 relative lg:absolute lg:w-[667px]  py-10 px-12 w-full lg:left-auto lg:bottom-auto lg:right-[5%] lg:top-[5%] gap-4 flex flex-col bottom-0 right-0 top-0 scale-75`}
    >
      <h2 className="text-2xl font-semibold">ورود | ثبت نام</h2>
      <div
        className="flex flex-col sm:flex-row gap-2 sm:justify-between text-[var(--link-blue)]
            "
      >
        <p className="lg:text-lg ">لطفا نام کاربری و رمز عبور خود را وارد</p>
        <Link href={"/register/signup"}>ثبت نام</Link>
      </div>
      <FormLogin />
      <Link
        href=""
        className="text-[var(--link-blue)] text-xs md:text-lg sm:text-sm"
      >
        رمز عبورتون رو فراموش کردید؟
      </Link>
      <div className="flex flex-row gap-1 justify-center items-center">
        <hr className="border-[var(--hr-gray)] w-30"></hr>
        <p className="font-semibold lg:text-xl sm:text-lg text-xs">ورود با</p>
        <hr className="border-[var(--hr-gray)] w-30"></hr>
      </div>
      <div className="flex gap-12 pt-6 justify-center">
        <LoginByButton title="google-icon" variant="google" />
        <LoginByButton title="facebook-icon" />
        <LoginByButton title="apple-icon" variant="apple" />
      </div>
    </div>
    // <div className={`${styles.loginbox} xl:m-7 sm:m-1 `}>
    //     <h2 className="text-2xl  font-semibold">ورود | ثبت نام</h2>

    //     <div className="flex justify-between lg:flex-row md:flex-col  sm:flex-row flex-col ">
    //         <p className="sm:text-base text-lg">لطفا نام کاربری و رمز عبور خود را وارد کنید</p>
    //         <Link className="text-[var(--link-blue)] sm:text-base text-xs" href="/register/signup"> ثبت نام </Link>
    //     </div>
    //     <FormLogin />
    //     <Link href="" className="text-[var(--link-blue)] text-xs md:text-lg sm:text-sm">رمز عبورتون رو فراموش کردید؟</Link>
    //     <div className="flex flex-row gap-1 justify-center items-center">
    //         <hr className="border-[var(--hr-gray)] w-30"></hr>
    //         <p className="font-semibold lg:text-xl sm:text-lg text-xs">ورود با</p>
    //         <hr className="border-[var(--hr-gray)] w-30"></hr>
    //     </div>
    //     <div className="flex gap-12 pt-6 justify-center">
    //         <LoginByButton title="google-icon" variant="google"/>
    //         <LoginByButton title="facebook-icon"/>
    //         <LoginByButton title="apple-icon" variant="apple" />
    //     </div>
    // </div>
  );
};
export default LoginBox;
