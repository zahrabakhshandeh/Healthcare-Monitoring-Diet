import React from "react";
import LoginArt from "/public/login.svg";
import MainButton from "@/components/MainButton";
import MainInput from "@/components/MainInput";
import Link from "next/link";
import { Box, Grid, Typography } from "@mui/material";
import LoginByButton from "@/components/LoginOptiontsButton";
import FormLogin from "./formLogin";
export default function Login() {
  return (
    <section>
      <Grid
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        container
        spacing={{ xs: 2, md: 0 }}
        columns={{ xs: 2, sm: 2, md: 2, xl: 2 }}
      >
        <Grid xs={2} md={1} sm={2}>
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
            <div className="flex justify-between mt-6 w-1/2">
              <LoginByButton variant="apple" />
              <LoginByButton />
              <LoginByButton variant="google" />
            </div>
          </Box>
        </Grid>
        <Grid xs={2} md={1} sm={2} sx={{ padding: "38px" }}>
          <LoginArt />
        </Grid>
      </Grid>
    </section>
  );
}
