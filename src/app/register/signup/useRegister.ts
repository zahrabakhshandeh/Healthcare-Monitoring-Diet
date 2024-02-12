import { toast } from "react-toastify";
import { useCallback, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SignUpDataType } from "@/types";
import { useRouter } from "next/navigation";

const SignUpschema = yup.object({
  userid: yup.string(),
  username: yup.string(),
  pass: yup.string(),
  passagain: yup.string(),
  email: yup.string(),
});

const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(SignUpschema),
  });

  const { push } = useRouter();
  const userIdRegex = /^\d{10}$/;
  const userNameRegex = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
  const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handelValueInputs = useCallback((data: SignUpDataType) => {
    if (
      userIdRegex.test(data.userid) &&
      userNameRegex.test(data.username) &&
      passRegex.test(data.pass) &&
      passRegex.test(data.passagain) &&
      data.pass == data.passagain
    ) {
      push("/");
      console.log(data);
      toast.success("you are sign in now!");
    } else {
      toast.error("Something wrong");
    }
  }, []);

  return {
    handelValueInputs,
    register,
    errors,
    handleSubmit,
  };
};

export default useRegister;
