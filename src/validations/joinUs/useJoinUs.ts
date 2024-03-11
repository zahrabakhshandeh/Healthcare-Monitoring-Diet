import * as yup from "yup";
import { JoinDataType } from "@/types";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const JoinSchema = yup.object({
  phoneNumber: yup
    .string()
    .length(11, "شماره تماس باید ۱۱ عدد داشته باشد")
    .matches(
      /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi,
      "شماره تماس را به درستی وارد کنید"
    )
    .required("شماره تماس الزامی است"),
});

const useJoinUs = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<JoinDataType>({
    resolver: yupResolver(JoinSchema),
  });


  const handelValueInputs = useCallback((data: JoinDataType) => {
    console.log(data);
    toast.success('خوش آمدید!')
  }, []);

  return {
    control,
    handelValueInputs,
    register,
    errors,
    handleSubmit,
  };
};

export default useJoinUs;