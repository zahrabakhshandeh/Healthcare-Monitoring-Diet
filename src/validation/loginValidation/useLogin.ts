import { LoginDataType, SignUpDataType } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

export const loginSchema = yup.object({
  username: yup
    .string()
    // .min(4, 'نام کاربری باید حداقل ۴ حرف داشته باشد')
    // .max(16 , 'نام کاربری بیشتر از ۱۶ حرف نمی‌تواند باشد')
    // .matches(/^[a-zA-Z0-9]/, "نام کاربری باید با حروف شروع شود و شامل حروف و اعداد می‌شود")
    .required(),

  pass: yup
    .string()
    .min(8,'')
    .max(16, '')
    // .matches(/[a-z]/, 'رمز عبور باید حداقل یک حرف کوچک داشته باشد')
    // .matches(/[A-Z]/, 'رمز عبور باید حداقل یک حرف بزرگ داشته باشد')
    // .matches(/[0-9]/, 'رمز عبور باید حداقل یک عدد داشته باشد')
    // .matches(/[!@#%^&*(),.?":{}|<>]/, 'رمز عبور باید حداقل یک کاراکتر خاص داشته باشد')
    .required(),
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

  const usernameRegex = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
  const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const { push } = useRouter();

  const handelValueInputs = useCallback((data: LoginDataType) => {
    if (usernameRegex.test(data.username) && passRegex.test(data.pass)) {
      push("/");
      console.log(data);
      toast.success("you are login now!");
    } else {
      toast.error("something wrong");
    }
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