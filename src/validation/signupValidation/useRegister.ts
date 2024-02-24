import { SignUpDataType } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

export const SignUpSchema = yup.object({
  userID: yup
    .string()
    .matches(/^\d{10}$/, "کد ملی ۱۰ رقمی می باشد ")
    .required("کد ملی را وارد کنید"),
  username: yup
    .string()
    .min(6, "نام کاربری باید حداقل ۴ حرف داشته باشد")
    .max(16, "نام کاربری بیشتر از ۱۶ حرف نمی‌تواند باشد")
    .matches(
      /^[a-zA-Z][a-zA-Z0-9]/,
      "نام کاربری باید با حروف شروع شود و شامل حروف و اعداد می‌شود"
    )
    .required("نام کاربری الزامی است"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/,
      "رمز عبور باید دارای حرف بزرگ و کوچک و عدد باشد"
    )
    .required("رمز عبور را وارد کنید"),
  passwordCheck: yup
    .string()
    .required("تکرار رمز عبور را وارد کنید")
    .oneOf([yup.ref("password")], "رمزعبور با تکرار آن یکسان نیست"),
  email: yup
    .string()
    .matches(
      /^[\w-\.]+@gmail(.)+[\w-]{2,4}$/g,
      "لطفا ایمیل را به درستی وارد کنید"
    )
    .required("لطفا ایمیل را وارد کنید"),
});

const useRegister = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpDataType>({
    resolver: yupResolver(SignUpSchema),
  });

  if (errors.userID) {
    toast.error(errors.userID.message);
  } else if (errors.username) {
    toast.error(errors.username.message);
  } else if (errors.password) {
    toast.error(errors.password.message);
  } else if (errors.passwordCheck) {
    toast.error(errors.passwordCheck.message);
  } else if (errors.email) {
    toast.error(errors.email.message);
  }

  const { push } = useRouter();

  const handelValueInputs = useCallback((data: SignUpDataType) => {
    console.log(data);
    push('/') 
    toast.clearWaitingQueue()
    toast.success('خوش آمدید')
  }, []);

  return {
    control,
    handelValueInputs,
    register,
    errors,
    handleSubmit,
  };
};

export default useRegister;
