import Link from "next/link";
import FormLogin from "@/components/LoginComponents/FormLogin";
import LoginByButton from "@/components/LoginComponents/LoginOptiontsButton"
import styles from "./styles.module.css" 

const LoginBox = () => {
    return(
        <div className={`${styles.loginbox} xl:m-7 sm:m-1 sm:scale-150 md:scale-105 sm:max-sm:scale-150`}>
            <h3 className="text-base font-semibold">ورود | ثبت نام</h3>
            <div className="flex md:gap-40 gap-8">
                <span className="sm:text-base text-xs">لطفا نام کاربری و رمز عبور خود را وارد کنید</span>
                <Link className="text-[var(--link-blue)] sm:text-base text-xs" href="/register/signup"> ثبت نام </Link>
            </div>
            <FormLogin />
            <Link href="" className="text-[var(--link-blue)] text-xs sm:text-lg md:text-lg sm:text-sm">رمز عبورتون رو فراموش کردید؟</Link>
            <div className="flex flex-row gap-1 justify-center items-center">
                <hr className="border-[var(--hr-gray)] w-30"></hr>                
                <p className="font-semibold lg:text-xl sm:text-lg text-xs">ورود با</p>
                <hr className="border-[var(--hr-gray)] w-30"></hr>                
            </div>
            <div className="flex gap-12 pt-6 justify-center">
                <LoginByButton variant="google"/>
                <LoginByButton />
                <LoginByButton variant="apple" />
            </div>
        </div>
    )
};
export default LoginBox;
