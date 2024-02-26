import SignUpArt from "/public/signup.svg";
import SignupBox from "@/components/SignupComponents/SignupBox";
import BlueBackground from "@/components/LoginComponents/LoginPageBackground"

const SignUpPage = () => {  
  return (
    <section className="flex flex-row justify-center lg:justify-start bg-[var(--hr-gray)]">
      <div className="rotate-180 flex justify-centers">
        <BlueBackground />
      </div>
      <div className="flex justify-center flex-row lg:absolute lg:m-10 z-2 gap-32">
        <div className="flex flex-col items-center justify-center ms-14">
          <div className="lg:flex justify-center items-center md:hidden hidden">
              <SignUpArt />
          </div>
          <div className="md:pt-1 flex flex-col items-center">
              <span className="xl:pt-4 text-[var(--hr-gray)] font-semibold xl:text-base">سلامتی؛ انتخابی برای زندگی، نه تنها یک هدف.</span>
              <span className="text-[var(--hr-gray)]  font-semibold text-base"> از هر لقمه تا هر قدم، زندگی‌ات را با انتخاب‌های سالم رقم بزن.</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
            <SignupBox/>
        </div>
      </div>
    </section>
  );
};
export default SignUpPage;