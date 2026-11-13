'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input, Button } from '@mantine/core';
import { showSwal } from '@/elements/templates/swalHelper';
import Footer from '@/elements/footer';
import "./SignUpSection.modules.css"
import { submitSignUpApi } from '@/data/server_request/auth';
import { useSignUpForm } from '@/hooks/Formik/useSignUpFormik';

const SignUpSection = () => {
  // const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [hide, setHide] = useState(true);
  const [type, setType] = useState("password");
  // const urlParams = useSearchParams();
  // const isRedirect = urlParams?.get('redirect');

  const hideHandler = ()=>{
    if(hide === true){
      setHide(false)
      setType("text")
    }else{
      setHide(true)
      setType("password")
    }
  }



  const submitHandler = async (values: any) => {
    try {
      setIsLoading(true);
      const result = await submitSignUpApi(values);
      console.log(result)

        if (result.status === 201) {
          window.location.href = "/login"
          // notifications.show({
          //   title: '',
          //   message: 'ثبت نام با موفقیت انجام گردید.',
          //   radius: 'md',
          //   color: 'violet',
          //   icon: <ConfirmIcon strokeWidth={2} />,
          // });
        }

        if (result === 400) {
          showSwal(
            '!لطفا وارد شوید',
            '.شما قبلا با این شماره ثبت نام کرده اید',
            'error',
            'تایید',
          );
        }
    } catch (error) {
        showSwal('مجددا تلاش کنید', '', 'error', 'تلاش مجدد');
    } finally {
      setIsLoading(false);
    }
  };

  const { values, handleChange, handleSubmit, errors } =
    useSignUpForm(submitHandler);

  return (
    <div className="Bg_Shadow">
      <div className=" flex flex-col gap-2 w-full h-full items-center justify-center pt-10">
        <form className={`LoginBox flex relative bg-white rounded-4xl  flex-col items-center mb-30 pb-7 w-130 pt-5`} onSubmit={handleSubmit} autoComplete='off'>
          <div className="w-[91%] h-1 bg-purple-600 rounded-t-3xl absolute top-0"></div>
          <br />
          <img className="w-40" src={'../../images/logo.webp'} alt="" />
          <br />
          <small className="flex text-purple-600 mt-3 text-[13px] bg-purple-100 rounded-3xl py-1 px-4 border-1 border-purple-300 gap-1">
            <b> شروع کار با جی اس تولز</b>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 20 20">
              <path fill="currentColor" d="M8.334 3.668a.5.5 0 0 1 .492.41l.969 5.295l5.296.969a.5.5 0 0 1 0 .984l-5.296.969l-.969 5.296a.5.5 0 0 1-.984 0l-.969-5.296l-5.295-.969a.5.5 0 0 1 0-.984l5.295-.969l.969-5.295a.5.5 0 0 1 .492-.41m-.54 6.225a.5.5 0 0 1-.401.402l-2.948.539l2.948.54a.5.5 0 0 1 .402.402l.539 2.947l.54-2.947l.02-.075a.5.5 0 0 1 .382-.327l2.947-.54l-2.947-.54a.5.5 0 0 1-.402-.401l-.54-2.948zm8.04-8.725a.5.5 0 0 1 .49.395l.372 1.742l1.743.374a.5.5 0 0 1 0 .978l-1.743.373l-.373 1.743a.5.5 0 0 1-.978 0L14.97 5.03l-1.742-.373a.5.5 0 0 1 0-.978l1.742-.374l.374-1.743l.026-.083a.5.5 0 0 1 .463-.311m0 2.789a.5.5 0 0 1-.211.211c.09.047.164.12.211.21a.5.5 0 0 1 .21-.21a.5.5 0 0 1-.21-.211"></path>
            </svg>
          </small>
          <b className="text-3xl mt-2">ثبت نام در جی اس تولز</b>
          <small className="text-[14px] opacity-65">حساب کاربری خودت رو بساز و وارد دنیای ابزارهای جی اس تولز شو</small>
          <br />
          <Link href={"login"} className=' text-md text-purple-700'>حساب کاربری دارید؟
            وارد شوید</Link>
          <br />

          <div className="flex w-[70%] justify-end"><small className='text-gray-700 text-right'><b>نام کاربری</b></small></div>
          <div className="flex relative w-[70%]">
            <Input
              className='formInp'
              size="lg"
              radius="lg"
              w={"100%"}
              dir='rtl'
              placeholder="نام کاربری خود را وارد کنید"
              name="username"
              value={values.username}
              onChange={handleChange}
              error={errors.username}
              type='text' />
            <svg className=' absolute left-3 h-[40px] mt-[5px] bg-white text-black/60' xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2a5 5 0 1 0 0 10a5 5 0 1 0 0-10M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1"></path>
            </svg>
          </div>
          <div className="flex w-[70%] justify-end text-red-400 text-sm">
            {errors.username}
          </div>
          <br />

          <div className="flex w-[70%] justify-end"><small className='text-gray-700 text-right'><b>شماره موبایل</b></small></div>
          <div className="flex relative w-[70%]">
            <Input className='formInp'
              size="lg" radius="lg"
              w={"100%"} dir='rtl'
              placeholder="مثلاً 09924547567"
              name="mobile_phone"
              value={values.mobile_phone}
              onChange={handleChange}
              error={errors.mobile_phone} />

            <svg className=' absolute left-3 h-[40px] mt-[5px] bg-white text-black/60' xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59a7.6 7.6 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43A15.28 15.28 0 0 0 6.3 17.7A15.28 15.28 0 0 0 16.57 22M6 5.41L8.59 8L7.3 9.29a1 1 0 0 0-.3.91a10.1 10.1 0 0 0 2.3 4.5a10.1 10.1 0 0 0 4.5 2.3a1 1 0 0 0 .91-.27L16 15.41L18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7"></path>
              <path fill="currentColor" d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path>
            </svg>
          </div>
          <div className="flex w-[70%] justify-end text-red-400 text-sm">
            {errors.mobile_phone}
          </div>
          <br />

          <div className="flex w-[70%] justify-end"><small className='text-gray-700 text-right'><b>رمز عبور</b></small></div>
          <div className="flex relative w-[70%]">
            <Input className='formInp'
              size="lg" radius="lg"
              w={"100%"} dir='rtl'
              placeholder="رمز عبور خود را وارد کنید"
              name="password"
              autoComplete="on"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              type={type} />

            <svg onClick={hideHandler} className={`${hide? "" :"hidden"} absolute left-3 h-[40px] mt-[5px] bg-white text-black/60`} xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M14 12c-1.095 0-2-.905-2-2c0-.354.103-.683.268-.973C12.178 9.02 12.092 9 12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3s3-1.358 3-3c0-.092-.02-.178-.027-.268c-.29.165-.619.268-.973.268"></path>
              <path fill="currentColor" d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316l-.105-.316C21.927 11.617 19.633 5 12 5m0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5c-.504 1.158-2.578 5-7.926 5"></path>
            </svg>
            <svg onClick={hideHandler} className={`${hide? "hidden" :""} absolute left-3 h-[40px] mt-[5px] bg-white text-black/60`} xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038c-5.351 0-7.424-3.846-7.926-5a8.6 8.6 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a1 1 0 0 0 0 .633C2.073 12.383 4.367 19 12 19m0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293L2.293 3.707l18 18l1.414-1.414l-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a1 1 0 0 0 0-.633C21.927 11.617 19.633 5 12 5m4.972 10.558l-2.28-2.28c.19-.39.308-.819.308-1.278c0-1.641-1.359-3-3-3c-.459 0-.888.118-1.277.309L8.915 7.501A9.3 9.3 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5c-.302.692-1.166 2.342-2.954 3.558"></path>
            </svg>
          </div>
          <div className="flex w-[70%] justify-end text-red-400 text-sm">
            {errors.password}
          </div>

          <br />
          <Button type='submit' variant="light" bg={'red'} color='white' w={'70%'} h={'42px'} bdrs={"lg"} loading={isLoading}>ثبت نام</Button>
          <Link href={"login"} className='w-full flex justify-center'>
            <Button variant="outline" mt={20} w={'70%'} h={'42px'} bdrs={"lg"} bd={"gray solid 1px"} color='#4b4a4a'>ورود به حساب کاربری</Button>
          </Link>
          <small className="flex text-blue-500 mt-3 text-[9px] gap-1">
            ورود شما به معنای پذیرش شرایط استفاده و قوانین حریم خصوصی جی اس تولز است
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26">
              <path fill="currentColor" d="m21.7 6.87l-8.5-3.78a.47.47 0 0 0-.4 0L4.3 6.87a.5.5 0 0 0-.3.45V10c0 4.92 2.94 10.88 8.82 12.94a.56.56 0 0 0 .36 0C19.06 20.88 22 14.92 22 10V7.32a.5.5 0 0 0-.3-.45m-4.012 3.31l-5.28 6.722a.88.88 0 0 1-.636.332l-.052.002a.88.88 0 0 1-.62-.257l-2.72-2.72a.875.875 0 1 1 1.24-1.237l2.022 2.022l4.67-5.945a.876.876 0 0 1 1.377 1.082z"></path>
            </svg>
          </small>
          <small className="flex text-gray-600 mt-3 text-[10px] gap-1- text-right">© تمامی حقوق برای جی اس تولز محفوظ است</small>
        </form>
      </div>
      <Footer/>
    </div>

  );
};

export default SignUpSection;
