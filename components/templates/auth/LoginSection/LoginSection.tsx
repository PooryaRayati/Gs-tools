'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input, Button } from '@mantine/core';
import "./LoginSection.modules.css"
import { showSwal } from '@/elements/templates/swalHelper';
import { submitLoginApi } from '@/data/server_request/auth';
import { useLoginForm } from '@/hooks/Formik/useLoginFormik';
import LoginVerifyOtp from '../LoginVerifyOtp/LoginVerifyOtp';
import Footer from '@/elements/footer';


const LoginSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [nextStep, setNextStep] = useState(false);


  const submitHandler = async (values: any) => {
    try {
      setIsLoading(true);
      const result = await submitLoginApi(values);
      if (result.status === 201) {
        setNextStep(true);
        // window.location.href = ""
        // notifications.show({
        //   title: '',
        //   message: 'کد ورود ارسال گردید.',
        //   radius: 'md',
        //   color: 'violet',
        //   icon: <ConfirmIcon strokeWidth={2} />,
        // });
      }
    } catch (error) {
      showSwal('!شماره موبایل وجود ندارد', '', 'error', "تلاش مجدد");
    } finally {
      setIsLoading(false);
    }
  };


  const { values, handleChange, handleSubmit, errors } =
    useLoginForm(submitHandler);


  return (
    <div className="Bg_Shadow">
      {nextStep ? (
        <LoginVerifyOtp mobilePhone={values.mobile_phone} />
      ) : (
        <form onSubmit={handleSubmit} className=" flex flex-col gap-2 w-full h-full items-center justify-center pt-10">
          <img className="w-40" src={'../../images/logo.webp'} alt="" />
          <div className={`LoginBox flex relative bg-white rounded-4xl  flex-col items-center mb-30 pb-7 w-130 pt-5`}>
            <div className="w-[70%] h-1 bg-blue-500 rounded-t-3xl absolute top-0"></div>
            <div className="LoginBox flex items-center justify-center bg-blue-100/70 rounded-3xl p-5">
              <svg className=" text-purple-600" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1024 1024">
                <path d="M0 0h1024v1024H0z" fill="none" />
                <path fill="currentColor" d="M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64m-8 824H288V134h448zM472 784a40 40 0 1 0 80 0a40 40 0 1 0-80 0" />
              </svg>
            </div>
            <small className="flex text-purple-600 mt-3 text-[13px]">
              <b> ورود سریع و امن</b>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                <path fill="currentColor" d="M8.334 3.668a.5.5 0 0 1 .492.41l.969 5.295l5.296.969a.5.5 0 0 1 0 .984l-5.296.969l-.969 5.296a.5.5 0 0 1-.984 0l-.969-5.296l-5.295-.969a.5.5 0 0 1 0-.984l5.295-.969l.969-5.295a.5.5 0 0 1 .492-.41m-.54 6.225a.5.5 0 0 1-.401.402l-2.948.539l2.948.54a.5.5 0 0 1 .402.402l.539 2.947l.54-2.947l.02-.075a.5.5 0 0 1 .382-.327l2.947-.54l-2.947-.54a.5.5 0 0 1-.402-.401l-.54-2.948zm8.04-8.725a.5.5 0 0 1 .49.395l.372 1.742l1.743.374a.5.5 0 0 1 0 .978l-1.743.373l-.373 1.743a.5.5 0 0 1-.978 0L14.97 5.03l-1.742-.373a.5.5 0 0 1 0-.978l1.742-.374l.374-1.743l.026-.083a.5.5 0 0 1 .463-.311m0 2.789a.5.5 0 0 1-.211.211c.09.047.164.12.211.21a.5.5 0 0 1 .21-.21a.5.5 0 0 1-.21-.211"></path>
              </svg>
            </small>
            <b className="text-2xl mt-2">ورود به جی اس تولز</b>
            <small className="text-[10px] opacity-65">برای ورود، شماره موبایل خود را وارد کنید</small>
            <br />
            <div className="flex w-[70%] justify-end"><small className='text-gray-700 text-right'><b>شماره موبایل</b></small></div>
            <div className="flex relative w-[70%]">

              <Input className='formInp'
                size="lg" radius="lg" w={"100%"}
                dir='rtl'
                placeholder="مثلاً 09924547567"
                name="mobile_phone"
                value={values.mobile_phone}
                onChange={handleChange}
                error={errors.mobile_phone} />
              <svg className=' absolute left-3 h-[40px] mt-[5px]  text-black/60' xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59a7.6 7.6 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43A15.28 15.28 0 0 0 6.3 17.7A15.28 15.28 0 0 0 16.57 22M6 5.41L8.59 8L7.3 9.29a1 1 0 0 0-.3.91a10.1 10.1 0 0 0 2.3 4.5a10.1 10.1 0 0 0 4.5 2.3a1 1 0 0 0 .91-.27L16 15.41L18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7"></path>
                <path fill="currentColor" d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path>
              </svg>

            </div>
            <div className="flex w-[70%] justify-end text-red-400 text-sm">
              {errors.mobile_phone}
            </div>


            <br />
            <Button variant="light" bg={'red'} color='white' w={'70%'} h={'42px'} bdrs={"lg"} loading={isLoading} type='submit'>ورود به حساب</Button>
            <Link href={"sign-up"} className='w-full flex justify-center'>
              <Button variant="outline" mt={20} w={'70%'} h={'42px'} bdrs={"lg"} bd={"gray solid 1px"} color='#4b4a4a'>ایجاد حساب جدید</Button>
            </Link>
            <div className="flex justify-center relative w-[100%] opacity-55 ">
              <hr className=' w-[60%] mt-5 opacity-60' />
              <small className='bg-white absolute top-1/2 p-1'>یا</small>
            </div>
            <Button variant="outline" mt={20} w={'70%'} h={'42px'} bdrs={"lg"} opacity={0.7} bd={"gray solid 1px"} color='#4b4a4a'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m11 5l-7 7l7 7m-7-7h16"></path>
              </svg>
              ورود با نام کاربری و رمز عبور
            </Button>
            <small className="flex text-blue-500 mt-3 text-[9px] gap-1">
              ورود شما به معنای پذیرش شرایط استفاده و قوانین حریم خصوصی جی اس تولز است
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
                <path fill="currentColor" d="m21.7 6.87l-8.5-3.78a.47.47 0 0 0-.4 0L4.3 6.87a.5.5 0 0 0-.3.45V10c0 4.92 2.94 10.88 8.82 12.94a.56.56 0 0 0 .36 0C19.06 20.88 22 14.92 22 10V7.32a.5.5 0 0 0-.3-.45m-4.012 3.31l-5.28 6.722a.88.88 0 0 1-.636.332l-.052.002a.88.88 0 0 1-.62-.257l-2.72-2.72a.875.875 0 1 1 1.24-1.237l2.022 2.022l4.67-5.945a.876.876 0 0 1 1.377 1.082z"></path>
              </svg>
            </small>
            <small className="flex text-gray-600 mt-3 text-[10px] gap-1- text-right">© تمامی حقوق برای جی اس تولز محفوظ است</small>
          </div>
        </form>
      )}
      <Footer/>
    </div>

  );
};

export default LoginSection;
