import SignUpArt from "/public/signup.svg";
import FormRegister from "./formRegister";

const SignUpPage = () => {
  
  return (
    <main className="flex min-[500px]:flex-col-reverse px-5  justify-around items-center md:flex-row  md:h-screen  min-[500px]:gap-12 md:gap-0 pt-10">
      <SignUpArt />

      <section className="flex items-start w-96 flex-col gap-8">
        <div className="flex flex-col gap-16 items-start">
          <h1 className="text-[2.25rem] text-[var(--black)] font-extrabold">
            ثبت نام
          </h1>
          <p className="text-2xl text-[var(--black)] font-semibold">
            خودتون رو به ما معرفی کنید
          </p>
        </div>
        <FormRegister />
      </section>
    </main>
  );
};

export default SignUpPage;
