import Link from "next/link";
export default function Home() {
  return (
    <main className="">
      <header className="flex w-full p-4 bg-[var(--new-gray)]  items-center gap-2 ">
        <Link
          className="hover:text-[var(--primary-blue)]"
          href={"register/signup"}
        >
          <span>ثبت نام</span>
        </Link>
        <Link
          className="hover:text-[var(--primary-blue)]"
          href={"register/login"}
        >
          <span>ورود</span>
        </Link>
      </header>
    </main>
  );
}
