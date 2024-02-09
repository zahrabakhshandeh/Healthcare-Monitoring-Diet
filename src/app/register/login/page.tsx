"use client"
import React from 'react';
import LoginArt from '/public/login.svg'
import '../../globals.css'
import MainButton from '@/components/MainButton';
import MainInput from '@/components/MainInput';
import Link from "next/link";
import { ButtonGroup, Grid, Typography } from '@mui/material';


export default function Login() {
  //This will be a useState hook for showing and notShowing password
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }
  
  return (
    <section>
      <Grid container spacing={0}>
       
        <Grid xs={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <div className='flex flex-col items-start text-right'>
            <div className='flex flex-col items-start gap-3'>
            <h2>ورود | ثبت نام</h2>
              <Typography sx={{fontSize: 24,}}>نام‌کاربری و رمز عبور خود را  وارد کنید</Typography>

              <form action="" className="flex w-full flex-col gap-4">
                <MainInput className="w-full" placeholder="نام کاربری"/>
                <MainInput placeholder="رمز عبور"/>
              </form>
              <div className='flex flex-row gap-10 pt-7 items-center'>
                <Link href="/" className='text-[var(--primary-blue)]'>رمز عبورتون رو فراموش کردید؟</Link>
                <MainButton className="w-44 font-bold" value={"ورود"}/>
              </div>
            </div>
          </div>

          <div>
            <Typography sx={{padding: '68px'}}>
              یا ورود با
            </Typography>

            <ButtonGroup
              color="primary"
              disabled={false}
              orientation="horizontal"
              size="small"
              variant="text"
            />

          </div>
        </Grid>
        <Grid xs={6} sx={{padding: '38px'}}>
            <LoginArt/>
        </Grid>
            
      </Grid>
   </section>
  )
}