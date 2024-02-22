import React, { useRef } from "react";
import LoginArt from "/public/login.svg";
import Link from "next/link";
import { Box, Grid, Typography } from "@mui/material";
import LoginByButton from "@/components/LoginOptiontsButton";
import FormLogin from "./formLogin";
import LoginBox from "@/components/LoginBox"

export default function Login() {
  return (
    <section className="flex justify-center bg-slate-100">
      <div className="grid">
        <div>
          <LoginBox/> 
        </div>
      </div>
    </section>
  );
}