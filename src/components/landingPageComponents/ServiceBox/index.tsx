import { ServiceBoxType } from "@/types";
import DefaultLogo from "/public/svg/service_tooth.svg";
import Link from "next/link";

const ServiceBox = ({ header, body, icon, color, link }: ServiceBoxType) => {
  return (
    <Link
      href={`${link}`}
      className="flex justify-center items-center flex-col gap-4 m-14  2xl:scale-125 scale-125"
    >
      <div
        className={`${color} rounded-full bg-[var(--green-btn)] w-20 h-20 flex justify-center items-center lg:m-4 m-2`}
      >
        <div className="scale-50">{icon ? icon : <DefaultLogo />}</div>
      </div>
      <div className="flex justify-center gap-4 flex-col items-center">
        <h2 className="text-4xl">{header}</h2>
        <p className="text-base ">{body}</p>
      </div>
    </Link>
  );
};
export default ServiceBox;
