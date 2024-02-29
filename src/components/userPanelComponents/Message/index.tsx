import { MessageType } from "@/types";

const Message = ({text, type}: MessageType) => {
    if (type === "error"){
        return(

        )
    }
    else if (type === "warning"){
        return(

        )
    }
    else if (type === "accept"){
        return(
            <div className="flex justify-center m-2 w-full bg-[var(--green-btn)]">
            {text}
        </div>
        )
    }
    return(
        <div className="flex justify-center m-2 w-full bg-[var(--primary-blue)]">
            {text}
        </div>
    )
};
export default Message;