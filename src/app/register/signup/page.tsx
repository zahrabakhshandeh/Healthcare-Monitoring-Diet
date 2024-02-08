import MainInput from "@/components/MainInput";
import SignUpArt from "/public/signup.svg";
import MainButton from "@/components/MainButton";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <main className="bg-slate-50 flex px-5  justify-around items-center h-screen">
      <div className="bg-slate-50">
        <SignUpArt />
      </div>
      <section className="flex items-start w-96 flex-col gap-8">
        <div className="flex flex-col gap-16 items-start">
          <h1 className="text-4xl text-[var(--primar-black-color)] font-extrabold">
            ثبت نام
          </h1>
          <p className="text-2xl text-[var(--primar-black-color)] font-semibold">
            خودتون رو به ما معرفی کنید
          </p>
        </div>
        <form action="" className="flex w-full flex-col gap-4">
          <MainInput className="w-full" placeholder="کد ملی" />
          <MainInput className="w-full" placeholder="نام و نام خانوادگی" />
          <MainInput className="w-full" placeholder="رمز عبور" />
          <MainInput className="w-full" placeholder="تکرار رمز عبور" />
          <MainInput className="w-full" placeholder="شماره تماس یا ایمیل" />
          <section className="flex flex-row-reverse items-center justify-between">
            <MainButton className="w-52 " value={"ثبت نام"} />
            <Link href={"/"}>
              <p className="text-lg text-[var(--primary-blue-color)]">
                قبلا ثبت نام کردید؟
              </p>
            </Link>
          </section>
        </form>
      </section>
    </main>
  );
};

export default SignUpPage;
