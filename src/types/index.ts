import {FunctionComponent,} from "react";

export interface QuickLinkBoxTypes {
    subject:String, 
    bodyText:String, 
    badgeLogo?:FunctionComponent|any,
    badgeColor?: String,
}

export interface MessageType{
    type: String,
    text: String
}

export interface ProfileType{
    avatar?: string|any,
    userName: string
}