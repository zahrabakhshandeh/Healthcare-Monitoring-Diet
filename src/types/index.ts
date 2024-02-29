import {FunctionComponent,} from "react";

export default interface QuickLinkBoxTypes {
    subject:string, 
    bodyText:string, 
    badgeLogo?:FunctionComponent|any,
    badgeColor?: String,
}