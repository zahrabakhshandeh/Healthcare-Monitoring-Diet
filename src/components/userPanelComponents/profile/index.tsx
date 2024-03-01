import { ProfileType } from "@/types";
import Image from 'next/image'
import Avatar from '/public/svg/avatar.svg'

const Profile = ({avatar, userName}: ProfileType) => {
    return(
        <div className="flex justify-center items-center m-10 flex-col gap-5">
            <div className="flex justify-center items-center rounded-full bg-white border-[var(--orange-color)] border-2">
            <Image
                src={avatar}
                width={240}
                height={240}
                alt=""
            />
            {/* <Avatar /> */}
            </div>
            <h1 className="text-white text-3xl">{userName}</h1>
        </div>
    )
};
export default Profile;