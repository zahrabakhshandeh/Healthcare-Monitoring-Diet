import React, { useRef } from "react";
import LoginArt from "/public/login.svg";
import Link from "next/link";
import { Box, Grid, Typography } from "@mui/material";
import LoginByButton from "@/components/LoginOptiontsButton";
import FormLogin from "./formLogin";
import LoginBox from "@/components/LoginBox"

export default function Login() {
  return (
    <LoginBox/> 
  );
}



{/* <section>
<Grid
  sx={{ display: "flex", justifyContent: "center", padding:'4rem' }}
  container
  spacing={{ xs: 2, md: 0 }}
  columns={{ xs: 2, sm: 2, md: 2, xl: 2 }}>
  <Grid item xs={2} md={1} sm={2}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "1rem",
      }}
    >
      <div className="flex flex-col">
        <div className="flex flex-col items-start gap-3">
          <Typography
            sx={{
              fontSize: "2.25rem",
              marginBottom: "92px",
              fontFamily: "inter",
              fontWeight: 900,
            }}
            variant="h2"
            component="h2"
          >
            ورود | ثبت نام
          </Typography>
          <div className="flex flex-row gap-4 items-center justify-center pb-8">
            <Typography
              sx={{ fontSize: 24, fontWeight: 600, fontFamily: "inter" }}
            >
              نام‌کاربری و رمز عبور خود را وارد کنید
            </Typography>
            <Link
              href="/register/signup"
              className="text-[var(--primary-blue)] underline"
            >
              {" "}
              ثبت نام{" "}
            </Link>
          </div>
          <FormLogin />
        </div>
      </div>

      <div className="flex flex-row pt-16 justify-center items-center">
        <hr className="border-[var(--orange-color)] border-2 w-40"></hr>
        <Typography
          sx={{
            fontFamily: "inter",
            paddingLeft: "20px",
            paddingRight: "29px",
          }}
        >
          یا ورود با
        </Typography>
        <hr className="border-[var(--orange-color)] border-2 w-40"></hr>
      </div>
      <Grid sx={{ display: "flex", justifyContent: "center", padding:'2rem' }}
        container
        spacing={{ xs: 1, md: 2}}
        columns={{ xs: 6}}>
          <Grid item xs={1}>
            <LoginByButton variant="apple" />
          </Grid>
          <Grid item xs={1}>
            <LoginByButton />
          </Grid>
          <Grid item xs={1}>
            <LoginByButton variant="google" />
          </Grid>
      </Grid>
    </Box>
  </Grid>
  <Grid item xs={2} md={1} sm={2} sx={{ padding: "38px" }}>
    <LoginArt />
  </Grid>
</Grid>
</section> */}