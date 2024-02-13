import { SignUpDataType } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

const SignUpSchema = yup.object({
  userid: yup.string().required(),
  username: yup.string().required(),
  pass: yup
    .string()
    // .min(8,'حداقل ۸ کارکتر وارد کنید')
    // .max(16, 'رمز عبور باید تا ۱۶ کارکتر باشد')
    // .matches(/[a-z]/, 'رمز عبور باید حداقل یک حرف کوچک داشته باشد')
    // .matches(/[A-Z]/, 'رمز عبور باید حداقل یک حرف بزرگ داشته باشد')
    // .matches(/[0-9]/, 'رمز عبور باید حداقل یک عدد داشته باشد')
    // .matches(/[!@#%^&*(),.?":{}|<>]/, 'رمز عبور باید حداقل یک کاراکتر خاص داشته باشد')
    .required(),
  passagain: yup.string().required(),
  // .oneOf([yup.ref('password')], 'رمزعبور با تکرار آن یکی نیست'),
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

  const usernameRegex = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
  const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const { push } = useRouter();

  const handelValueInputs = useCallback((data: SignUpDataType) => {
    if (
      usernameRegex.test(data.pass) &&
      passRegex.test(data.pass) &&
      passRegex.test(data.passagain) &&
      data.pass == data.passagain &&
      emailRegex.test(data.email)
    ) {
      push("/");
      console.log(data)
      toast.success("you are signin now!");
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

export default useRegister;
