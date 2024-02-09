import React from 'react';
import LoginArt from '/public/login.svg'
import '../../globals.css'
import MainButton from '@/components/MainButton';
import MainInput from '@/components/MainInput';
import Link from "next/link";
import { Grid, Typography } from '@mui/material';
import LoginByButton from '@/components/LoginOptiontsButton';

export default function Login() {
  
  return (
    <section>
      <Grid container spacing={0}>
       
        <Grid xs={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <div className='flex flex-col items-start text-right'>
            <div className='flex flex-col items-start gap-3'>
            <Typography 
            sx={{fontSize: '36px', paddingBottom: '92px', fontFamily: 'inter', fontWeight: 900}} variant="h2" component="h2">ورود | ثبت نام</Typography>
              <div className='flex flex-row gap-4 items-center justify-center pb-8'>
                <Typography sx={{fontSize: 24, fontWeight: 500}}>نام‌کاربری و رمز عبور خود را  وارد کنید</Typography>
                <Link href='/'> ثبت نام </Link>
              </div>

              <form action="" className="flex w-full flex-col gap-4">
                <MainInput className="w-full" placeholder="نام کاربری"/>
                <MainInput type='password' placeholder="رمز عبور"/>
              </form>
              <div className='flex flex-row gap-10 pt-7 items-center'>
                <Link href="/" className='text-[var(--primary-blue)]'>رمز عبورتون رو فراموش کردید؟</Link>
                <MainButton className="w-44 font-bold" value={"ورود"}/>
              </div>
            </div>
          </div>

          <div className='flex flex-row pt-16 justify-center items-center'>
            <hr className='border-[var(--orange-color)] border-2 w-40'></hr>
            <Typography sx={{fontFamily: 'inter', paddingLeft: '20px', paddingRight: '29px'}}>
              یا ورود با
            </Typography>
            <hr className='border-[var(--orange-color)] border-2 w-40'></hr>
          </div>
          <div className="flex flex-row pt-6 gap-2">
            <LoginByButton variant="google" />
            <LoginByButton variant="apple" />            
            <LoginByButton />
          </div>
        </Grid>
        <Grid xs={6} sx={{padding: '38px'}}>
            <LoginArt/>
        </Grid>
            
      </Grid>
   </section>
  )
}