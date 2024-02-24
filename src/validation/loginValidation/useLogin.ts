import * as yup from "yup";
// import { toast } from 'react-toastify';

import { LoginDataType } from "@/types";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

export const loginSchema = yup.object({
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
      "رمز عبور باید دارای حرف بزرگ و عدد باشد"
    )
    .required("رمز عبور را وارد کنید"),
});
let count = 0;
const useLogin = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginDataType>({
    resolver: yupResolver(loginSchema),
  });
  console.log(count++);
  if (errors.username) {
    console.log("error");
    toast.error(errors.username.message);
  }
  if (!errors.username && errors.password) {
    console.log("error");
    toast.error(errors.password.message);
  }
  const { push } = useRouter();
  const handelValueInputs = useCallback((data: LoginDataType) => {
    console.log(data);
    push("/");
    toast.success("خوش آمدید");
  }, []);

  return {
    control,
    handelValueInputs,
    register,
    errors,
    handleSubmit,
  };
};

export default useLogin;
