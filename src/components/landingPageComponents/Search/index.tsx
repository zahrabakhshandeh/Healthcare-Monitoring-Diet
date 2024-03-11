import MainInput from "@/components/MainInput";
import SearchSvg from "/public/svg/search.svg"
import Link from "next/link";

const Search = () => {
    return(
        <div className="flex justify-center items-center flex-col gap-6 xl:m-24 md:m-10 m-2">
            <div className="z-0 relative xl:scale-100 lg:scale-90 scale-75">
                <SearchSvg />
            </div>
            <div className="z-10 flex justify-center absolute items-center flex-col xl:gap-4 gap-1 w-4/5">
                <h2 className="xl:text-7xl lg:text-6xl text-4xl">
                    دنبال خدمات خاصی هستید؟
                </h2>
                <h2 className="xl:text-7xl lg:text-6xl text-4xl">
                    جستجو کنید و نوبت بگیرید.   
                </h2>
                <div className="xl:w-3/5 w-5/6 md:w-full">
                    <MainInput placeholder="جستجو..." className="h-20"/>
                </div>
                <Link href={'./'} className="text-[var(--link-blue)] text-2xl pt-4"> دیدن تمام خدمات </Link>
            </div>
        </div>
    )
};
export default Search;
