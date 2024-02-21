import * as yup from "yup";
// import { toast } from 'react-toastify';

import { LoginDataType } from "@/types";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

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
    .min(8, "")
    .max(16, "")
    .matches(/[a-z]/, "رمز عبور باید حداقل یک حرف کوچک داشته باشد")
    .matches(/[A-Z]/, "رمز عبور باید حداقل یک حرف بزرگ داشته باشد")
    .matches(/[0-9]/, "رمز عبور باید حداقل یک عدد داشته باشد")
    .matches(
      /[!@#%^&*(),.?":{}|<>]/,
      "رمز عبور باید حداقل یک کاراکتر خاص داشته باشد"
    )
    .required("رمز عبور را وارد کنید"),
});

const useLogin = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginDataType>({
    resolver: yupResolver(loginSchema),
  });

  const { push } = useRouter();

  const handelValueInputs = useCallback((data: LoginDataType) => {
    console.log(data);
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
