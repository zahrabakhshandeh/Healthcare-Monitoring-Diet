import * as yup from "yup";

export const SignUpSchema = yup.object({
  userID: yup.string().min(10, 'کد ملی ۱۰ رقمی می باشد ').required('Required'),
  username: yup.string(),
  password: yup.string()
  .min(8,'حداقل ۸ کارکتر وارد کنید')
  .max(16, 'رمز عبور باید تا ۱۶ کارکتر باشد')
  .matches(/[a-z]/, 'رمز عبور باید حداقل یک حرف کوچک داشته باشد')
  .matches(/[A-Z]/, 'رمز عبور باید حداقل یک حرف بزرگ داشته باشد')
  .matches(/[0-9]/, 'رمز عبور باید حداقل یک عدد داشته باشد')
  .matches(/[!@#%^&*(),.?":{}|<>]/, 'رمز عبور باید حداقل یک کاراکتر خاص داشته باشد') 
  .required('رمز عبور را وارد کنید'),
  passwordCheck: yup.string()
  .oneOf([yup.ref('password')], 'رمزعبور با تکرار آن یکی نیست'),
  email: yup.string(),
});


// const useRegister = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<any>({
//     resolver: yupResolver(SignUpSchema),
//   });

//   const { push } = useRouter();
//   const userIdRegex = /^\d{10}$/;
//   const userNameRegex = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
//   const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

//   const handelValueInputs = useCallback((data: SignUpDataType) => {
//     if (
//       userIdRegex.test(data.userid) &&
//       userNameRegex.test(data.username) &&
//       passRegex.test(data.pass) &&
//       passRegex.test(data.passagain) &&
//       data.pass == data.passagain
//     ) {
//       push("/");
//       console.log(data);
//       toast.success("you are sign in now!");
//     } else {
//       toast.error("Something wrong");
//     }
//   }, []);

//   return {
//     handelValueInputs,
//     register,
//     errors,
//     handleSubmit,
//   };
// };

// export default useRegister;
