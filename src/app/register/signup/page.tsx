import SignUpArt from "/public/signup.svg";
import SignupBox from "@/components/SignupComponents/SignupBox";
import BlueBackground from "@/components/LoginComponents/LoginPageBackground";

const SignUpPage = () => {
  return (
    <section className="flex relative h-screen justify-center item lg:justify-start lg:bg-[var(--hr-gray)]">
      <div className="hidden lg:inline-block">
        <div className="absolute flex flex-col gap-4 z-10 top-[10%] right-[10%]">
          <SignUpArt />
          <div className=" relative bottom-0 flex flex-col items-center">
            <span className="text-[var(--hr-gray)] font-semibold text-base">
              سلامتی؛ انتخابی برای زندگی، نه تنها یک هدف.
            </span>
            <span className="text-[var(--hr-gray)]  font-semibold text-base">
              {" "}
              از هر لقمه تا هر قدم، زندگی‌ات را با انتخاب‌های سالم رقم بزن.
            </span>
          </div>
        </div>
        <BlueBackground loginMode={false} />
      </div>
      <main className="w-full">
        <SignupBox />
      </main>

      {/* <div className="rotate-180 hidden h-screen lg:flex justify-centers">
        <BlueBackground />
      </div> */}
      {/* <div className="flex justify-center  flex-row lg:p-10 z-2 gap-32">
        <div className="lg:flex hidden bg-[var(--primary-blue)]  flex-col items-center justify-center ps-14">
          <div className="lg:flex  justify-center items-center md:hidden hidden">
            <SignUpArt />
          </div>
          <div className="md:pt-1 flex flex-col items-center">
            <span className="xl:pt-4 text-[var(--hr-gray)] font-semibold xl:text-base">
              سلامتی؛ انتخابی برای زندگی، نه تنها یک هدف.
            </span>
            <span className="text-[var(--hr-gray)]  font-semibold text-base">
              {" "}
              از هر لقمه تا هر قدم، زندگی‌ات را با انتخاب‌های سالم رقم بزن.
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <SignupBox />
        </div>
      </div> */}
    </section>
  );
};
export default SignUpPage;
