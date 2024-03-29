
import { SignUpDataType } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export const SignUpSchema = yup.object({
  userID: yup.string().min(10, 'کد ملی ۱۰ رقمی می باشد ').required('کد ملی را وارد کنید'),
  username: yup.string().required('نام و نام‌خانوادگی را وارد کنید'),
  password: yup.string().required()
  .min(8,'حداقل ۸ کارکتر وارد کنید')
  .max(16, 'رمز عبور باید تا ۱۶ کارکتر باشد')
  .matches(/[a-z]/, 'رمز عبور باید حداقل یک حرف کوچک داشته باشد')
  .matches(/[A-Z]/, 'رمز عبور باید حداقل یک حرف بزرگ داشته باشد')
  .matches(/[0-9]/, 'رمز عبور باید حداقل یک عدد داشته باشد')
  .matches(/[!@#%^&*(),.?":{}|<>]/, 'رمز عبور باید حداقل یک کاراکتر خاص داشته باشد')
  .required('رمز عبور را وارد کنید'),
  passwordCheck: yup.string().required()
  .oneOf([yup.ref('password')], 'رمزعبور با تکرار آن یکی نیست'),
  email: yup.string().required(),
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


  const handelValueInputs = useCallback((data: SignUpDataType) => {
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

export default useRegister;
