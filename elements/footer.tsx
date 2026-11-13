import { List } from '@mantine/core';
import MediaPortal from './mediaPortal';

export default function Footer() {

    return (
        <div className="">
            <div className="w-full bg-gray-100 flex items-center justify-between px-10 py-8">
                <div className="flex items-start w-full justify-between">
                    <List className=' text-right'>
                        <b className='text-lg'>تماس با ما</b>
                        <List.Item className='text-sm h-2'> </List.Item>
                        <List.Item className='text-sm opacity-76 h-7'>تبریز، میرداماد</List.Item>
                        <List.Item className='text-sm opacity-76 h-7'>شنبه تا پنجشنبه ۸ الی ۲۱</List.Item>
                        <List.Item className='text-sm opacity-76 h-7'><b>04133810519</b></List.Item>
                    </List>
                    <List className=' text-right'>
                        <b className='text-lg'>راهنمای خرید</b>
                        <List.Item className='text-sm h-2'> </List.Item>
                        <List.Item className='text-sm opacity-76 h-7'>راهنمای انتخاب ابزار </List.Item>
                        <List.Item className='text-sm opacity-76 h-7'>شرایط ارسال</List.Item>
                        <List.Item className='text-sm opacity-76 h-7'>قوانین بازگشت کالا</List.Item>
                        <List.Item className='text-sm opacity-76 h-7'>گارانتی محصولات</List.Item>
                    </List>
                    <List className=' text-right'>
                        <b className='text-lg'>فروشگاه</b>
                        <List.Item className='text-sm h-2'> </List.Item>
                        <List.Item className='text-sm opacity-76 h-7'>همه محصولات</List.Item>
                        <List.Item className='text-sm opacity-76 h-7'>محصولات تخفیف دار</List.Item>
                        <List.Item className='text-sm opacity-76 h-7'>بلاگ</List.Item>
                        <List.Item className='text-sm opacity-76 h-7'>درباره ما</List.Item>
                    </List>
                    <div className="flex flex-col items-end text-right px-10 w-[40%]">
                        <b className='text-2xl'>جی اس تولز</b>
                        <br />
                        <p className='text-sm opacity-70'>جی اس تولز فروشگاه تخصصی ابزار آلات است ما مجموعه‌ای از ابزارهای دستی، برقی، شارژی و صنعتی را با تضمین اصالت کالا ارائه می‌کنیم</p>
                        <br />
                        <div className=""><MediaPortal/></div>
                    </div>
                </div>
            </div>
            <hr className="opacity-30" />
            <div className="w-full bg-gray-100 flex items-center justify-between px-10 h-30">
                <small>محفوظ است  <b>GS Tools</b>  همه ی حقوق برای @</small>
                <small>😎<b className=" text-blue-700">Poorya BlackWhite</b>  ساخته شده توسط</small>
                <img src="/images/Barcode.jpeg" alt="" width={100} height={100} className=" rounded-3xl" />
            </div>
        </div>
    )
}