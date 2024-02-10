import React from "react";
import { useMediaQuery } from "@mui/material";

//This will be Updated Please Do not Modify I'm learning more about it 
interface responsiveRaperPropType {
    children: any;
}

const ResponsiveWrapper = ({ children }:responsiveRaperPropType) => {
  const isSm = useMediaQuery((theme:any) => theme.breakpoints.down("sm"));

  return <div>{children(isSm)}</div>;
};

export default ResponsiveWrapper;