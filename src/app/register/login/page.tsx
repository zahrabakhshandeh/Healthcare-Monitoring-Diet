import LoginBox from "@/components/LoginComponents/LoginBox";
import BlueBackground from "@/components/LoginComponents/LoginPageBackground"
import LoginArt from "/public/loginArt.svg"


const Login = () => {
  return (
    <section className="flex flex-row justify-end items-center bg-[var(--hr-gray)] ">
      <BlueBackground />
      <div className="grid grid-cols-2 z-10 absolute space-x-28 md:grid-cols-2 sm:grid-cols-1 ">
          <LoginBox/> 
        <div className="flex justify-center flex-col items-center">
          <LoginArt/>
          <span className="pt-16 text-[var(--hr-gray)] font-semibold text-base">سلامتی؛ انتخابی برای زندگی، نه تنها یک هدف.</span>
          <span className="text-[var(--hr-gray)] font-semibold text-base"> از هر لقمه تا هر قدم، زندگی‌ات را با انتخاب‌های سالم رقم بزن.</span>
        </div>
      </div>
    </section>
  );
};
export default Login;