'use client'
import MainInput from "@/components/MainInput"
import UserProfile from "/public/profile-circle.svg";
import PasswordKey from "/public/passwordkey.svg";
 
const FormLogin = () => {
    return(
        <form action="" className="flex w-full flex-col gap-4">
                <MainInput
                  firstIconSrc={UserProfile}
                  className="w-full"
                  placeholder="نام کاربری"
                />
                <MainInput
                  firstIconSrc={PasswordKey}
                  type="password"
                  placeholder="رمز عبور"
                />
              </form>
    )
}
export default FormLogin;