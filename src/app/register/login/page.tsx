"use client"
import React from 'react';
import LoginArt from '/public/login.svg'
import '../../globals.css'
import MainButton from '@/components/MainButton';
import MainInput from '@/components/MainInput';
import Link from "next/link";
import UserProfile from "/public/profile-circle.svg";
import { Grid, Typography } from '@mui/material';

export default function Login() {

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }
  
  return (
    <section>
      <Grid container spacing={0}>
        
        <Grid xs={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className='flex items-center flex-col '>
            <div className='flex flex-col items-start gap-3'>
            <Typography sx={{fontSize: '36px', paddingBottom: '92px'}} variant="h3" component="h2">ورود | ثبت نام</Typography>
              <Typography sx={{fontSize: 24}}>نام‌کاربری و رمز عبور خود را وارد کنید</Typography>

              <MainInput className="w-full" placeholder="نام کاربری"/>
              <MainInput placeholder="رمز عبور"/>
              <div className='flex flex-row gap-10 pt-7 items-center'>
                <Link href="/" className='text-blue-600'>رمز عبورتون رو فراموش کردید؟</Link>
                <MainButton className="w-44 font-bold" value={"ثبت نام"}/>
              </div>
            </div>
          </div>

          <div>
            <Typography></Typography>
          </div>
        </Grid>
            <Grid xs={6} sx={{padding: 2}}>
              <LoginArt/>
            </Grid>
      </Grid>
   </section>
  )
}

