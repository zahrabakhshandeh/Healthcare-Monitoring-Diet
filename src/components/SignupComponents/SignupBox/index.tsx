import FormRegister from '../formRegister';
import Link from "next/link";

const SignupBox = () => {
    return(
        <div>
            <h2>ثبت نام </h2>
            <div>
                
            </div>
            <FormRegister />
            <Link href={"/register/login"}>
            <p className="text-lg text-[var(--primary-blue)]">
                قبلا ثبت نام کردید؟
            </p>
            </Link>
        </div>
    )
}
export default SignupBox;