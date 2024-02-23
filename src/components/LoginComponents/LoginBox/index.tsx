import Link from "next/link";
import FormLogin from "@/components/LoginComponents/FormLogin";
import LoginByButton from "@/components/LoginComponents/LoginOptiontsButton"
import styles from "./styles.module.css" 

const LoginBox = () => {
    return(
        <div className={styles.loginbox}>
            <h3 className="text-base font-semibold">ورود | ثبت نام</h3>
            <div className="flex gap-52">
                <span className="text-base">لطفا نام کاربری و رمز عبور خود را وارد کنید</span>
                <Link className="text-[var(--link-blue)] text-lg" href="/register/signup"> ثبت نام </Link>
            </div>
            <FormLogin />
            <Link href="" className="text-[var(--link-blue)] text-lg">رمز عبورتون رو فراموش کردید؟</Link>
            <div className="flex flex-row gap-4 justify-center items-center">
                <hr className="border-[var(--hr-gray)] w-40"></hr>                
                <p className="font-semibold text-xl">ورود با</p>
                <hr className="border-[var(--hr-gray)] w-40"></hr>                
            </div>
            <div className="flex gap-12 pt-10 justify-center">
                <LoginByButton variant="google"/>
                <LoginByButton />
                <LoginByButton variant="apple" />
            </div>
        </div>
    )
};
export default LoginBox;
