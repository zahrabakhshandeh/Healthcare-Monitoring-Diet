import { ProfileType } from "@/types";
import Image from 'next/image'
import Avatar from '/public/svg/avatar.svg'

const Profile = ({avatar, userName}: ProfileType) => {
    return(
        <div className="flex justify-center items-center flex-col gap-5 scale-75 xl:scale-100">
            <div className="flex justify-start items-center rounded-full bg-white border-[var(--orange-color)] border-2">
                <Image
                    src={avatar}
                    width={180}
                    height={180}
                    alt=""
                />
            </div>
            <h1 className="text-white lg:text-3xl xl:text-4xl md:text-lg">{userName}</h1>
        </div>
    )
};
export default Profile;