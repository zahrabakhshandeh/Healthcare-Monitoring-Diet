import React from 'react'
import Link from "next/link";
import FormLogin from "@/components/LoginComponents/FormLogin";
import styles from "./styles.module.css" 

const LoginBox = () => {
    return(
        <div className={styles.loginbox}>
            <h3>ورود | ثبت نام</h3>
            <div className="flex gap-8">
                <span className="text-xs">لطفا نام کاربری و رمز عبور خود را وارد کنید</span>
                <Link href="/"> ثبت نام </Link>
            </div>
            <FormLogin />               
        </div>
    )
};
export default LoginBox;