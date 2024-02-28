import FormRegister from "../formRegister";
import Link from "next/link";
import styles from "./styles.module.css";

const SignupBox = () => {
  return (
    <div
      className={`${styles.SignupBox} rounded-[3.4rem] bg-white left-0 lg:z-10 relative lg:absolute md:w-[667px]  py-10 px-12 w-full lg:right-auto lg:bottom-auto lg:left-[5%] lg:top-[5%] gap-4 flex flex-col bottom-0 right-0 top-0 scale-75`}
    >
      <h2 className="text-2xl font-semibold">ثبت نام </h2>

      <div
        className="flex flex-col sm:flex-row gap-2 sm:justify-between text-[var(--link-blue)]
            "
      >
        <p className="lg:text-lg ">خودتون رو به ما معرفی کنید:</p>
        <Link href={"/register/login"}> قبلا ثبت نام کردید؟ </Link>
      </div>
      <FormRegister />
    </div>
  );
};
export default SignupBox;
