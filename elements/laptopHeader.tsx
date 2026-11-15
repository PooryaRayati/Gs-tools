import Link from "next/link";
import { use, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { queryTraceSpans } from "next/dist/build/swc/generated-native";

export default function LaptopHeader() {

    const [loggedin, setLoggedin] = useState(false)
    const [anim, setAnim] = useState(false)
    const [anim2, setAnim2] = useState(false)
    const [anim3, setAnim3] = useState(false)
    const [anim4, setAnim4] = useState(false)
    const [anim5, setAnim5] = useState(false)




    useEffect(() => {
        const token = Cookies.get("token")
        console.log(token)
        if (token) {
            setLoggedin(true)
        }
    }, [])

    return (
        <div className="header_window flex flex-col">
            <div className="w-full flex items-center mt-1  px-10 justify-between py-4">
                <div className="flex items-center text-lg gap-5">
                    <button className="Cart imgShadow flex items-center gap-4 relative text-gray-800 text-white px-3 py-3 rounded-2xl">
                        <p className=" text-[15px]"> سبد خرید</p>
                        <div className="flex items-end justify-center w-4 h-4 rounded-3xl absolute top-[-4px] right-1 bg-black text-sm text-white">
                            <small className=" text-[9px]">0</small>
                        </div>
                        <svg className=" text-white" xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinejoin="round" d="M2.31 11.243A1 1 0 0 1 3.28 10h17.44a1 1 0 0 1 .97 1.242l-1.811 7.243A2 2 0 0 1 17.939 20H6.061a2 2 0 0 1-1.94-1.515z"></path>
                                <path strokeLinecap="round" d="M9 14v2m6-2v2m-9-6l4-6m8 6l-4-6"></path>
                            </g>
                        </svg>
                    </button>
                    <div className=" w-[1px] bg-gray-500/50 h-5 rounded-2xl"></div>
                    <Link href={`${loggedin ? "p-admin" : "login"}`}>
                        <button className="dashboard_btn flex items-center gap-2 relative text-gray-800 ">
                            <p className=" text-[15px]">{loggedin ? "پنل کاربری" : " ورود / ثبت نام"}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 1024 1024">
                                <path fill="currentColor" d="M858.5 763.6a374 374 0 0 0-80.6-119.5a375.6 375.6 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.6 375.6 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2M512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362s17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362s-17.9 89.1-50.4 121.6S557.9 534 512 534"></path>
                            </svg>
                        </button>
                    </Link>
                </div>
                <div className="relative">
                    <input className="imgShadow searchbox_window flex items-center w-140 bg-gray-200 rounded-lg pr-3 pl-12 pt-1 h-13 text-right" type="text" placeholder="جست و جو برای محصولات" />
                    <button className=" absolute h-13 top-0 px-3 rounded-l-lg">
                        <svg className=" opacity-60" xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 16 16">
                            <path fill="currentColor" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"></path>
                        </svg>
                    </button>
                </div>
                <div className=""><img className="w-40" src="/images/logo.webp" alt="GST Logo" /></div>
            </div>
            <div className="bottom_head flex w-full justify-center">
                <div className="imgShadow flex justify-between bg-rose-600/90 w-[85%] text-white p-4 rounded-2xl ">
                    <button className="flex items-center gap-2 bg-amber-950/70 rounded-3xl py-2 px-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="m21.49 8.73l-1.91-1.1v-2.2c0-.55-.45-1-1-1h-2.2l-1.1-1.91a1 1 0 0 0-1.37-.37l-1.21.7l-.7.41l-.7-.41l-1.2-.7c-.48-.28-1.09-.11-1.37.37l-1.1 1.91h-2.2c-.55 0-1 .45-1 1v2.2l-1.91 1.1a1 1 0 0 0-.37 1.37l.7 1.2l.41.7l-1.1 1.91a1 1 0 0 0 .37 1.37l1.2.7l.71.41v2.2c0 .55.45 1 1 1h2.2l.41.71l.7 1.2c.19.32.52.5.87.5c.17 0 .34-.04.5-.13l1.2-.7l.7-.41l.7.41l1.21.7c.23.13.5.17.76.1s.47-.24.61-.47l.7-1.2l.41-.7h2.2c.55 0 1-.45 1-1v-2.2l.71-.41l1.2-.7c.48-.28.64-.89.37-1.37l-.7-1.21l-.41-.7l.41-.7l.7-1.2c.28-.48.11-1.09-.37-1.37Zm-2.21 5.51l-.79.46l-.42.24l-.5.29v2.35h-2.35l-.83 1.44l-.35.6l-.34-.2l-.99-.57l-.21-.12l-.5-.29l-.5.29l-.41.24l-.8.46l-.34.2l-.66-1.13l-.53-.91H6.41v-2.35l-.5-.29l-.42-.24l-.79-.46l-.34-.2l.2-.34l.99-1.71l-.29-.5l-.89-1.54l1.54-.89l.5-.29V6.43h2.35l.98-1.7l.2-.34l1.54.89l.5.29l.5-.29l1.15-.67l.05-.03l.34-.2l.62 1.08l.56.96h2.35v2.35l.5.29l.42.25l.78.45l.34.2l-.58 1.01l-.6 1.04l.39.68l.79 1.37l-.34.2Z"></path>
                            <path fill="currentColor" d="m14.2 7.4l-3 4l-3 4l.8.6l.8.6l3-4l3-4L15 8zm.3 5.6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 1 0 0-3m-5-5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 1 0 0-3"></path>
                        </svg>
                        تخفیف ها و پیشنهادات
                    </button>
                    <div className="flex items-center gap-4">
                        <div onMouseEnter={() => { setAnim(true) }} onMouseLeave={() => { setAnim(false) }} className={` flex flex-col gap-1`}>
                            <button className="flex items-center gap-1">
                                تماس و آدرس
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                                        <circle cx={12} cy={10} r={3}></circle>
                                        <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8"></path>
                                    </g>
                                </svg>
                            </button>
                            <div className={`anim_Line h-[2px] ${anim ? "" : "hidden"}`}></div>
                        </div>
                        <div className="w-[1px] bg-gray-300 h-3 rounded-2xl"></div>
                        <div onMouseEnter={() => { setAnim2(true) }} onMouseLeave={() => { setAnim2(false) }} className={` flex flex-col gap-1`}>
                            <button className="flex items-center gap-1">
                                بلاگ
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 2048 2048">
                                    <path fill="currentColor" d="M2048 0v1536H731l-475 475v-475H0V0zM128 128v256h1792V128zm1792 1280V512H128v896h256v293l293-293zm-640-768h512v640h-512zm128 512h256V768h-256zM256 768h896v128H256zm0 256h896v128H256z"></path>
                                </svg>
                            </button>
                            <div className={`anim_Line2 h-[2px] ${anim2 ? "" : "hidden"}`}></div>
                        </div>
                        <div className="w-[1px] bg-gray-300 h-3 rounded-2xl"></div>
                        <div onMouseEnter={() => { setAnim3(true) }} onMouseLeave={() => { setAnim3(false) }} className={` flex flex-col gap-1`}>
                            <button className="flex items-center gap-1">
                                فروشگاه
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19.148 2.971A2.01 2.01 0 0 0 17.434 2H6.566c-.698 0-1.355.372-1.714.971L2.143 7.485A1 1 0 0 0 2 8a3.97 3.97 0 0 0 1 2.618V19c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8.382A3.97 3.97 0 0 0 22 8a1 1 0 0 0-.143-.515zm.836 5.28A2 2 0 0 1 18 10c-1.103 0-2-.897-2-2c0-.068-.025-.128-.039-.192l.02-.004L15.22 4h2.214zM10.819 4h2.361l.813 4.065C13.958 9.137 13.08 10 12 10s-1.958-.863-1.993-1.935zM6.566 4H8.78l-.76 3.804l.02.004C8.025 7.872 8 7.932 8 8c0 1.103-.897 2-2 2a2 2 0 0 1-1.984-1.749zM10 19v-3h4v3zm6 0v-3c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v3H5v-7.142c.321.083.652.142 1 .142a4 4 0 0 0 3-1.357c.733.832 1.807 1.357 3 1.357s2.267-.525 3-1.357A4 4 0 0 0 18 12c.348 0 .679-.059 1-.142V19z"></path>
                                </svg>
                            </button>
                            <div className={`anim_Line3 h-[2px] ${anim3 ? "" : "hidden"}`}></div>
                        </div>
                        <div className="w-[1px] bg-gray-300 h-3 rounded-2xl"></div>
                        <div onMouseEnter={() => { setAnim4(true) }} onMouseLeave={() => { setAnim4(false) }} className={` flex flex-col gap-1`}>
                            <button className="flex items-center gap-1">
                                خانه
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                                        <path d="M21 19v-6.733a4 4 0 0 0-1.245-2.9L13.378 3.31a2 2 0 0 0-2.755 0L4.245 9.367A4 4 0 0 0 3 12.267V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2"></path>
                                        <path d="M9 15a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6H9z"></path>
                                    </g>
                                </svg>
                            </button>
                            <div className={`anim_Line4 h-[2px] ${anim4 ? "" : "hidden"}`}></div>
                        </div>
                        <div className="w-[1px] bg-gray-300 h-3 rounded-2xl"></div>
                        <div onMouseEnter={() => { setAnim5(true) }} onMouseLeave={() => { setAnim5(false) }} className={` flex flex-col gap-1`}>
                            <button className="flex items-center gap-1">
                                دسته بندی کالا ها
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M9 9H5V5h4zm11 4h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m-1 6h-4v-4h4zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4m0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2M7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4m0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2"></path>
                                </svg>
                            </button>
                            <div className={`anim_Line5 h-[2px] ${anim5 ? "" : "hidden"}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
