'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLoginOtpVerifyFormik } from '@/hooks/Formik/useLoginOtpVerifyFormik';
// import { notifications, Notifications } from '@mantine/notifications';

import Cookies from 'js-cookie';
import { Button, PinInput } from '@mantine/core';

// import ConfirmIcon from '@/component/modules/icons/Confirm.icon';


import { submitLoginOtpVerifyApi } from '@/data/server_request/auth';
import { showSwal } from '@/elements/templates/swalHelper';



const LoginVerifyOtp = ({ mobilePhone }: { mobilePhone: string }) => {
  // const router = useRouter();
  // const urlParams = useSearchParams();
  // const isRedirect = urlParams?.get('redirect');
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);

  const submitHandler = async (values: any) => {
    try {
      setIsLoading(true);
      const result = await submitLoginOtpVerifyApi(values);
      Cookies.set('token', JSON.stringify(result.data));
      if (result.status === 201 || result.status === 200) {
        window.location.href = "/"
      }
    } catch (error) {
      showSwal('مجددا تلاش کنید', '', 'error', 'تلاش مجدد');
    } finally {
      setIsLoading(false);
    }
  };

  const { values, handleSubmit, errors, setFieldValue } =
    useLoginOtpVerifyFormik(submitHandler);

  useEffect(() => {
    if (timeLeft === 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
  };

  const handleResend = async () => {
    try {
      const result = await submitLoginOtpVerifyApi({
        phone: mobilePhone,
      });
      if (result.status === 201) {
        setTimeLeft(120);
      }
    } catch (error) {
      showSwal('مجددا تلاش کنید', '', 'error', 'تلاش مجدد');
    }
  };

  useEffect(() => {
    setFieldValue('phone', mobilePhone);
  }, []);

  return (
    <div className="">
      <form onSubmit={handleSubmit} className=" flex flex-col gap-2 w-full h-full items-center justify-center pt-10">
        <div className={`LoginBox flex relative bg-white rounded-4xl  flex-col items-center mb-30 pb-7 w-130 pt-5`}>
          <div className="LoginBox flex items-center justify-center bg-blue-100/70 rounded-3xl p-5">
            <svg className=" text-purple-600" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                <path d="M4.268 18.845c.225 1.67 1.608 2.979 3.292 3.056c1.416.065 2.855.099 4.44.099s3.024-.034 4.44-.1c1.684-.076 3.067-1.385 3.292-3.055c.147-1.09.268-2.207.268-3.345s-.121-2.255-.268-3.345c-.225-1.67-1.608-2.979-3.292-3.056A95 95 0 0 0 12 9c-1.585 0-3.024.034-4.44.1c-1.684.076-3.067 1.385-3.292 3.055C4.12 13.245 4 14.362 4 15.5s.121 2.255.268 3.345"></path>
                <path d="M7.5 9V6.5a4.5 4.5 0 0 1 9 0V9m-4.375 6.5H12m.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0m-4.125 0H8m.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0m7.875 0H16m.25 0a.25.25 0 1 1-.5 0a.25.25 0 0 1 .5 0"></path>
              </g>
            </svg>
          </div>
          <br />
          <b className="text-2xl mt-2">تأیید شماره موبایل</b>
          <hr />
          <small className="text-[14px] opacity-65">کد تأیید ارسال شده به شماره موبایل زیر را وارد کنید</small>
          <br />
          <div className=" bg-violet-700/10 flex items-center gap-1 py-1 px-3 rounded-3xl text-violet-700 border-1 border-violet-700">
            <b className='pt-2'>{mobilePhone}</b>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m1.75 9.75 2.5 2.5m3.5-4 2.5-2.5m-4.5 4 2.5 2.5 6-6.5"></path>
            </svg>
          </div>
          <br />
          <small className="text-[12px] opacity-65 flex items-center gap-2">
            کد ۶ رقمی را وارد کنید
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                <path d="M18.709 3.495C16.817 2.554 14.5 2 12 2s-4.816.554-6.709 1.495c-.928.462-1.392.693-1.841 1.419S3 6.343 3 7.748v3.49c0 5.683 4.542 8.843 7.173 10.196c.734.377 1.1.566 1.827.566s1.093-.189 1.827-.566C16.457 20.08 21 16.92 21 11.237V7.748c0-1.405 0-2.108-.45-2.834s-.913-.957-1.841-1.419"></path>
                <path d="M12 9v1m-1-.5a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></path>
                <path d="M12.75 14h-1.5l.75-3.5z"></path>
              </g>
            </svg>
          </small>
          <br />
          <div className="">
            <PinInput size="lg"
              length={6} placeholder=""
              type={/^[0-9]*$/}
              inputType="tel"
              inputMode="numeric"
              name="code"
              value={values.code}
              onChange={(value) => setFieldValue('code', value)} />
            <br />
            <Button variant="light" bg={'red'} color='white' w={'100%'} h={'42px'} bdrs={"lg"} loading={isLoading} type='submit'>ورود</Button>
          </div>
          <br />
          <div className={""}>
            <div>
              {timeLeft === 0 && (
                <button className='text-violet-700' onClick={handleResend}>ارسال مجدد کد</button>
              )}
              <div>
                <p className='border-[1px] pt-2 px-3 rounded-2xl border-violet-600 text-violet-600 bg-violet-600/10'>{formatTime(timeLeft)}</p>
              </div>
            </div>
          </div>
          <br />
          <div className="flex items-center gap-5 bg-gray-100 rounded-lg w-[70%] py-3 pl-8 pr-5 text-right">
            <small className='opacity-70 text-[12px]'>کد تأیید را در اختیار دیگران قرار ندهید. این کد فقط برای ورود به حساب کاربری شماست</small>
            <svg className='text-violet-700' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <g fill="none">
                <path fill="currentColor" d="M15.47 7.99a5.4 5.4 0 1 1-10.79 0a5.4 5.4 0 0 1 10.8 0" opacity={0.2}></path>
                <path fill="currentColor" d="M18.38 21.84H1.78a8.4 8.4 0 0 1 8.3-8.46c4.58 0 8.3 3.79 8.3 8.46" opacity={0.2}></path>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.47 7.99a5.4 5.4 0 0 1-5.4 5.4a5.4 5.4 0 1 1 5.4-5.4"></path>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M1.78 21.68a8.3 8.3 0 0 1 8.3-8.3a10 10 0 0 1 4.08 1.11m5.54 3.95v-4.15"></path>
                <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.2 21.97a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0"></path>
              </g>
            </svg>
          </div>
        </div>

      </form>
    </div>
  );
};

export default LoginVerifyOtp;
