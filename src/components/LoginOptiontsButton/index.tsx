import React, { ReactNode, useCallback} from "react";
import GoogleLogo from "/public/google.svg";
import FaceBookLogo from "/public/facebook.svg";
import AppleLogo from "/public/apple.svg";

const LoginByButton = (props: {variant ?: string}) => {
    if(props.variant === 'google') {
        return(
            <button type="submit" className="bg-[var(--new-gray)] py-3 px-5 rounded-3xl shadow-md ">
                <GoogleLogo/>
            </button>
        )
    }
    else if(props.variant === 'apple'){
        return(
        <button  className="bg-[var(--new-gray)] px-5 rounded-3xl shadow-md ">
            <AppleLogo/>
        </button>
    )
    }
    else{
        return(
            <button className="bg-[var(--new-gray)] px-5 rounded-3xl shadow-md">
                <FaceBookLogo/>
            </button>
            )
    }
};
export default LoginByButton;