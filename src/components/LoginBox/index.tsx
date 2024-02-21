import React from 'react'
import Link from "next/link";
import FormLogin from "@/components/FormLogin";

const LoginBox = () => {
    return(
        <div className='flex flex-col gap-6 w-96'>
            <h3>ورود | ثبت نام</h3>
            <div className="flex gap-8">
                <span>لطفا نام کاربری و رمز عبور خود را وارد کنید</span>
                <Link href="/"> ثبت نام </Link>
            </div>
            <FormLogin />               
        </div>
    )
};
export default LoginBox;