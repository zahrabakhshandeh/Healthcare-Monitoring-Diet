import Link from "next/link";

export default function Home() {
  return (
    <main className="flex gap-2  p-24">
      <Link href={"/register/signup"}>ثبت نام</Link>
      <hr />
      <Link href={"/register/login"}>ورود</Link>
    </main>
  );
}
