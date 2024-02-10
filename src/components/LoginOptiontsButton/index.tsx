import React, { FunctionComponent, ReactNode, useCallback} from "react";
import GoogleLogo from "/public/google.svg";
import FaceBookLogo from "/public/facebook.svg";
import AppleLogo from "/public/apple.svg";
import { ButtonPropsTypes } from "@/types";


const logoMap: { [key: string]: FunctionComponent } = {
    google: GoogleLogo,
    apple: AppleLogo,
    default: FaceBookLogo,
};

const LoginByButton: React.FC<ButtonPropsTypes> = ({variant}) => {

    const Logo = logoMap[variant || 'default'];

    return (
        <button type="submit" className="bg-[var(--new-gray)] py-2.5 px-5 rounded-3xl shadow-md ">
            <Logo />
        </button>
    );
};
export default LoginByButton;