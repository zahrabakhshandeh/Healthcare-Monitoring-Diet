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
    <section className="flex justify-end bg-[var(--hr-gray)]">
      <div className="grid">
        <div className="flex items-center me-64">
          <LoginBox/> 
        </div>  
      </div>
      <BlueBackground />
    </section>
  );
}