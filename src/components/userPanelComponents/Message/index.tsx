import { MessageType } from "@/types";

const Message = ({text, type}: MessageType) => {
    if (type === "error"){
        return(
            <div className="flex justify-center py-4 rounded-3xl text-white text-xl font-bold  bg-[var(--red)]">
                {text}
            </div>
        )
    }
    else if (type === "warning"){
        return(
            <div className="flex justify-center py-4 rounded-3xl text-white text-xl font-bold  bg-[var(--orange-color)]">
                {text}
            </div>
        )
    }
    else if (type === "accept"){
        return(
        <div className="flex justify-center py-4 rounded-3xl text-white text-xl font-bold  bg-[var(--green-btn)]">
            {text}
        </div>
        )
    }
    return(
        <div className="flex justify-center py-4 rounded-3xl text-white text-xl font-bold w-full bg-[var(--primary-blue)]">
            {text}
        </div>
    )
};
export default Message;