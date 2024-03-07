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
        className="flex flex-col sm:flex-row gap-4 sm:justify-between text-[var(--link-blue)]
            "
      >
        <p className="lg:text-lg ">لطفا نام کاربری و رمز عبور خود را وارد</p>
        <Link href={"/register/signup"}>ثبت نام</Link>
      </div>
      <FormLogin />
      <section className="flex flex-col mt-6 gap-4">
        <div className="flex flex-row gap-1 justify-center items-center">
          <hr className="border-[var(--hr-gray)] border w-full " />
          <p className="font-semibold w-28 text-base">ورود با</p>
          <hr className="border-[var(--hr-gray)] border w-full"></hr>
        </div>
        <div className="flex gap-12 pt-6 justify-center">
          <LoginByButton title="google-icon" variant="google" />
          <LoginByButton title="facebook-icon" />
          <LoginByButton title="apple-icon" variant="apple" />
        </div>
      </section>
    </div>
  );
};
export default LoginBox;
