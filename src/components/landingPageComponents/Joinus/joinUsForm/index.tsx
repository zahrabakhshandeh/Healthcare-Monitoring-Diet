"use client";
import MainButton from "@/components/MainButton";
import MainInput from "@/components/MainInput";
import useJoinUs from "@/validations/joinUs/useJoinUs";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { toast } from "react-toastify";
import CellPhone from '/public/svg/call.svg'
const JoinUsForm = () => {
  const { handelValueInputs, handleSubmit, control, errors } = useJoinUs();
  useEffect(()=>{
    (errors.phoneNumber) && toast.error(errors.phoneNumber?.message)
  },[errors.phoneNumber])
  return (
    <form
      onSubmit={handleSubmit(handelValueInputs)}
      className="flex justify-center items-center flex-col w-full gap-7"
    >
         <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <MainInput
              firsticonsrc={CellPhone}
              className={`lg:w-3/5 w-4/5 py-5 ${
                errors.phoneNumber && "border border-red-600"
              }`}
              type="number"
              placeholder="شماره تماس..."
              {...field}
            />
          )}
        />

      <MainButton
        value="شروع کنیم"
        className="bg-[var(--green-btn)] lg:w-3/5 w-4/5 py-4"
      />
    </form>
  );
};

export default JoinUsForm;
