import FormRegister from '../formRegister';
import Link from "next/link";
import styles from "./styles.module.css"

const SignupBox = () => {
    return(
        <div className={styles.SignupBox}>
            <h2>ثبت نام </h2>
            <div className="flex flex-row">
                <p>خودتون رو به ما معرفی کنید:</p>
                <Link href={"/register/login"}> قبلا ثبت نام کردید؟ </Link>
            </div>
            <FormRegister />
        </div>
    )
}
export default SignupBox;