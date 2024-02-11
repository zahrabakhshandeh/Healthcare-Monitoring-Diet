import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    username: yup
    .string()
    .min(4)
    .max(16)
    .matches(/^[a-zA-Z0-9]/, "نام کاربری باید با حروف شروع شود و شامل حروف و اعداد می‌شود")
    .required('نام کاربری اجباری است'),

    password: yup
    .string()
    .min(8)
    .max(16)
    .matches(/[a-z]/, 'رمز عبور باید حداقل یک حرف کوچک داشته باشد')
    .matches(/[A-Z]/, 'رمز عبور باید حداقل یک حرف بزرگ داشته باشد')
    .matches(/[0-9]/, 'رمز عبور باید حداقل یک عدد داشته باشد')
    .matches(/[!@#%^&*(),.?":{}|<>]/, 'رمز عبور باید حداقل یک کاراکتر خاص داشته باشد') 
    .required('رمز عبور را باید وارد کنید'),
})