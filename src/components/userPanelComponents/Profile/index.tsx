import { ProfileType } from "@/types";
import Image from 'next/image'
import DefaultAvatar from "/public/svg/default_avatar.svg"
import Link from "next/link";

const Profile = ({avatar, userName}: ProfileType) => {
    return(
        <div className="flex justify-center items-center flex-col gap-5 scale-75 xl:scale-100">
            <div className="flex justify-start items-center rounded-full bg-white">
                {/* NOTE: Add route later should be dynamic */}
                <Link href={'/change-avatar'}>
                    {avatar ? <Image
                        src={avatar}
                        width={180}
                        height={180}
                        alt=""
                    />:<DefaultAvatar />}
                </Link>
            </div>
            <h1 className="cursor-pointer text-white lg:text-3xl xl:text-4xl md:text-lg">{userName}</h1>
        </div>
    )
};
export default Profile;