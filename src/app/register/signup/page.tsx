import SignUpArt from "/public/signup.svg";
import Link from "next/link";
import FormRegister from "./formRegister";

const SignUpPage = () => {
  return (
    <>
      <div className="bg-slate-50">
        <SignUpArt />
      </div>
      <section className="flex items-start w-96 flex-col gap-8">
        <div className="flex flex-col gap-16 items-start">
          <h1 className="text-4xl text-[var(--black)] font-extrabold">
            ثبت نام
          </h1>
          <p className="text-2xl text-[var(--black)] font-semibold">
            obuwpgub2wupgbp24pu خودتون رو به ما معرفی کنید
          </p>
        </div>
        <FormRegister />
      </section>
    </>
  );
};

export default SignUpPage;
