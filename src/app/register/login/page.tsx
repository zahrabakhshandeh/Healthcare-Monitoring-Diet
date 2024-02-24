import LoginBox from "@/components/LoginComponents/LoginBox";
import BlueBackground from "@/components/LoginComponents/LoginPageBackground"
import LoginArt from "/public/loginArt.svg"


const Login = () => {
  return (
    <section className="flex flex-row xl:justify-end xl:items-center md:bg-[var(--hr-gray)] md:justify-end sm:justify-center sm:items-center">
      <BlueBackground />

      <div className="grid justify-center items-center sm:grid xl:grid-cols-2 z-10 xl:absolute md:absolute sm:space-x-16 lg:max-lg:space-x-28 md:grid-cols-2 sm:grid-cols-1 md:justify-center md:items-center md:scale-90 xl:max-xl:scale-100 xl:max-xl:space-x-28 
      ">
          <LoginBox/> 
          
        <div className=" justify-center items-center xl:flex hidden md:justify-center md:flex-col lg:items-center xl:scale-100 md:inline-block md:max-md:scale-50 hidden md:scale-75 xl:max-xl:scale-100 ">
          <LoginArt/>
          <div className="md:pt-10 flex flex-col items-center">
            <span className="xl:pt-16 text-[var(--hr-gray)] font-semibold xl:text-base">سلامتی؛ انتخابی برای زندگی، نه تنها یک هدف.</span>
            <span className="text-[var(--hr-gray)] font-semibold text-base"> از هر لقمه تا هر قدم، زندگی‌ات را با انتخاب‌های سالم رقم بزن.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;