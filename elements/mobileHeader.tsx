import Link from "next/link";
import { use, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import Menu from "@/elements/menuBox";

export default function MobileHeader() {

    const [loggedin, setLoggedin] = useState(false)
    const [menu, setMenu] = useState(false)



    useEffect(() => {
        const token = Cookies.get("token")
        console.log(token)
        if (token) {
            setLoggedin(true)
        }
    }, [])

    return (
        <div className="header_mobile hidden justify-center">
            <Menu width="80%" show={menu} Close={() => { setMenu(false) }} Account="guest" />
            <div className="imgShadow flex items-center justify-between w-[85%] bg-rose-600/90 h-15 rounded-2xl mt-3 px-2">
                <Link href={"/"}>
                    <div className="imgShadow bg-white p-2 rounded-2xl">
                        <img className="w-20" src="/images/logo.webp" alt="GST Logo" />
                    </div>
                </Link>
                <div className="flex items-center gap-3">
                    <button className="imgShadow bg-white p-1.5 rounded-md">
                        <svg className=" opacity-70" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <g fill="none">
                                <path fill="red" d="M17.35 7.9a5.35 5.35 0 1 1-10.7 0a5.35 5.35 0 0 1 10.7 0" opacity={0.5}></path>
                                <path fill="currentColor" d="M20.3 21.72H3.7a8.4 8.4 0 0 1 8.3-8.46c4.59 0 8.3 3.79 8.3 8.46" opacity={0.2}></path>
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.35 7.9A5.33 5.33 0 0 1 12 13.27a5.35 5.35 0 1 1 5.35-5.35"></path>
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.3 21.56a8.3 8.3 0 0 0-16.6 0"></path>
                            </g>
                        </svg>
                    </button>
                    <button className="imgShadow bg-white p-1.5 rounded-md relative">
                        <svg className=" opacity-70" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <g fill="none">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 11l-1 9m5-9l-4-7M2 11h20M3.5 11l1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4M4.5 15.5h15M5 11l4-7m0 7l1 9"></path>
                                <path fill="currentColor" d="M9 11h6l-.5 4.5h5L18 20h-4l.5-4.5h-5L10 20H6l-1.5-4.5h5z" opacity={0.15}></path>
                            </g>
                        </svg>
                        <div className=" absolute flex items-end justify-center w-3 h-3 rounded-3xl  top-[-4px] right-[-2px] bg-black/85 text-sm text-white">
                            <small className=" text-[6px]">0</small>
                        </div>
                    </button>
                    <button onClick={() => setMenu(true)} className="imgShadow bg-white p-1.5 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M19 6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm0 5a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm0 5a1 1 0 0 1 0 2h-7a1 1 0 0 1 0-2Z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
