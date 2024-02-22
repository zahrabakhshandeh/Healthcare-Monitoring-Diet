import React, { useRef } from "react";
import LoginArt from "/public/login.svg";
import Link from "next/link";
import { Box, Grid, Typography } from "@mui/material";
import LoginByButton from "@/components/LoginComponents/LoginOptiontsButton";
import FormLogin from "@/components/LoginComponents/formLogin";
import LoginBox from "@/components/LoginComponents/LoginBox";
import BlueBackground from "@/components/LoginComponents/LoginPageBackground/index.tsx"


export default function Login() {
  return (
    <section className="flex justify-center bg-slate-100">
      <div className="grid">
        <div>
          <BlueBackground />
          <LoginBox/> 
        </div>
      </div>
    </section>
  );
}