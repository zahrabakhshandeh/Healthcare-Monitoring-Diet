import FormRegister from '../formRegister';
import Link from "next/link";
import styles from "./styles.module.css"

const SignupBox = () => {
    return(
        <div className={styles.SignupBox}>
            <h2 className='lg:text-2xl font-semibold'>ثبت نام </h2>

            <div className="flex flex-row gap-56 text-[var(--link-blue)]
            ">
                <p className='lg:text-lg'>خودتون رو به ما معرفی کنید:</p>
                <Link href={"/register/login"}> قبلا ثبت نام کردید؟ </Link>
            </div>
            <FormRegister />
        </div>
    )
}
export default SignupBox;