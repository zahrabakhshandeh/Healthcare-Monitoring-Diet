"use client"
import React from 'react';
import LoginArt from '/public/login.svg'
import './globals.css'
import { Button, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';


export default function LoginPage() {

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }
  
  return (
    <section className='bg-slate-50 w-full h-full'>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div className='col-span2'><LoginArt /></div>
        </Grid>
        <Grid item xs={6}>
          <div className='flex items-center flex-col justify-center'>
            <div className='flex flex-col items-end gap-3'>
              <h3 className="text-5xl mb-8">ورود | ثبت نام</h3>
              <p className="text-2xl mb-8">نام‌کاربری و رمز عبور خود را وارد کنید</p>
            
              <Input
              sx={{
                width: 585,
                height: 57,
                border: 2,
                borderRadius: 16,
                paddingLeft: 3,
                paddingRight: 3
            }}
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />

            <FormControl sx={{
                width: 585,
                height: 57,
                border: 2,
                borderRadius: 16,
                paddingLeft: 3,
                paddingRight: 3
            }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
              <a href="" className='text-blue-600'>رمز عبورتون رو فراموش کردید؟</a>
            </div>
          </div>
        </Grid>
          
      </Grid>
    </section>
   );
  }