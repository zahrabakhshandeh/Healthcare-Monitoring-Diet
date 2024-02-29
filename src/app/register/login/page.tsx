import LoginBox from "@/components/LoginComponents/LoginBox";
import BlueBackground from "@/components/LoginComponents/LoginPageBackground";
import LoginArt from "/public/loginArt.svg";

const Login = () => {
  return (
    <section className="flex relative h-screen justify-center item lg:justify-start lg:bg-[var(--hr-gray)]">
      <main className="w-full">
        <LoginBox />
      </main>
      <div className="hidden lg:inline-block">
        <div className="absolute flex flex-col gap-4 z-10 top-[15%] left-[10%]">
          <LoginArt />
          <div className=" relative bottom-0 flex flex-col items-center">
            <span className="text-[var(--hr-gray)] font-semibold text-base">
              سلامتی؛ انتخابی برای زندگی، نه تنها یک هدف.
            </span>
            <span className="text-[var(--hr-gray)]  font-semibold text-base">
              از هر لقمه تا هر قدم، زندگی‌ات را با انتخاب‌های سالم رقم بزن.
            </span>
          </div>
        </div>
        <BlueBackground loginMode={true} />
      </div>
    </section>
  );
};
export default Login;
