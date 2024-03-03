import { NextPage } from "next";
import { AppProps } from "next/app";
import {FunctionComponent, ReactElement, ReactNode,} from "react";

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

export interface sideBarElementType{
    text: string, 
    logo?:FunctionComponent|any,
    link?: string 
}