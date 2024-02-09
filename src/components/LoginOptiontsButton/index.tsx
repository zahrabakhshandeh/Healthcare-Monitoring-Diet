import React from "react";
import GoogleLogo from "/public/google.svg"
import FaceBookLogo from "/public/facebook.svg"
import AppleLogo from "/public/apple.svg"

const LoginByButton = (props:any) =>{
        if(props.variant === 'google') {
            return(
                <button type="submit" className="bg-[var(--new-gray)] p-4 rounded-3xl">
                    <GoogleLogo/>
                </button>
            )
        }
        else if (props.variant === 'apple'){
            <button  className="bg-[var(--new-gray)] p-4 rounded-3xl" type="submit">
                <AppleLogo/>
            </button>
        }
        else{
            <button  className="bg-[var(--new-gray)] p-4 rounded-3xl" type="submit">
                    <FaceBookLogo/>
                </button>
        }
};
export default LoginByButton;