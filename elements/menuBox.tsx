"use client";
import Link from 'next/link';
import React, { useState , useEffect  } from 'react';


const Menu = ({ width, show, Close , Account }: { width: string, show: boolean, Account : string , Close: () => void }) => {
    const language_state = localStorage.getItem("Language");
    const [language,setLanguage] = useState(language_state)
    return (
        <div className={`Menu imgShadow ${show ? "" : "hidden"} max-w-xs- fixed right-0 top-0 w-[${width}] bg-white rounded-l-xl overflow-hidden shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.08),0_15px_15px_-6px_rgba(0,0,0,0.06)] transition-all duration-300 `}>
            <div className="px-4 w-60 py-4 border-b border-gray-200 bg-gradient-to-r from-rose-500 to-rose-800">
                <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-blue-200 uppercase tracking-wider">
                        Signed in as
                    </p>
                    <button onClick={Close} className='close flex items-center justify-center gap-1 text-amber-50 border-[2px] border-amber-50 rounded-2xl p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 1024 1024">
                            <path fill="currentColor" fillRule="evenodd" d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.1.1 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.12.12 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.1.1 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926L224.297 857.629c-.04.041-.06.052-.083.059a.12.12 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.1.1 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512L166.371 224.297c-.041-.04-.052-.06-.059-.083a.12.12 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.1.1 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.12.12 0 0 1 .07 0Z"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex items-center mt-1">
                    <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        <svg fill="currentColor" viewBox="0 0 20 20" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fillRule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-sm font-medium text-white truncate hover:after:w-full relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-[#2b6cb0] after:transition-all after:duration-300">
                        {Account}
                    </p>
                </div>
            </div>
            <div className="py-1.5">
                <Link href="/profile" className="group relative flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-all duration-200">
                    <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-r opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:scale-y-100 scale-y-80" />
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors duration-200">
                        <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-5 text-blue-600 group-hover:text-[#2b6cb0]" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fillRule="evenodd" />
                        </svg>
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-[#1a365d]">Profile</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" className="h-3 w-3 text-gray-400 ml-auto group-hover:text-[#2b6cb0]" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fillRule="evenodd" />
                    </svg>
                </Link>
                <Link href="/about" className="group relative flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-all duration-200">
                    <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-r opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:scale-y-100 scale-y-80" />
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors duration-200">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 text-blue-600 group-hover:text-[#2b6cb0]" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></path>
                        </svg>
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-[#1a365d]">About Us</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" className="h-3 w-3 text-gray-400 ml-auto group-hover:text-[#2b6cb0]" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fillRule="evenodd" />
                    </svg>
                </Link>
                <a href="#" className="group relative flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-all duration-200">
                    <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-r opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:scale-y-100 scale-y-80" />
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors duration-200">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 text-blue-600 group-hover:text-[#2b6cb0]" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M19.148 5.25H5.335l-1.18-2.115A.75.75 0 0 0 3.5 2.75H2a.75.75 0 0 0 0 1.5h1.06l1.164 2.088L6.91 12.28l.003.006l.237.523l-2.697 2.877a.75.75 0 0 0 .462 1.258l2.458.281a40.7 40.7 0 0 0 9.254 0l2.458-.28a.75.75 0 0 0-.17-1.491l-2.458.28a39.3 39.3 0 0 1-8.914 0l-.975-.11l1.98-2.112l.053-.064l.752.098c1.055.138 2.122.165 3.182.08a9.3 9.3 0 0 0 6.366-3.268l.579-.685l.053-.072l1.078-1.642c.764-1.164-.071-2.71-1.463-2.71M6.5 18.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M16 20a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></path>
                        </svg>
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-[#1a365d]">Cart</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" className="h-3 w-3 text-gray-400 ml-auto group-hover:text-[#2b6cb0]" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fillRule="evenodd" />
                    </svg>
                </a>
                <a href="#" className="group relative flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-all duration-200">
                    <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-r opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:scale-y-100 scale-y-80" />
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors duration-200">
                        <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-5 text-blue-600 group-hover:text-[#2b6cb0]" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" fillRule="evenodd" />
                        </svg>
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-[#1a365d]">Settings</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" className="h-3 w-3 text-gray-400 ml-auto group-hover:text-[#2b6cb0]" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fillRule="evenodd" />
                    </svg>
                </a>
                <button onClick={()=>{localStorage.setItem("Account",""),window.location.reload()}} className="group relative w-full flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 transition-all duration-200">
                    <div className="absolute left-0 top-0 h-full w-1 bg-red-500 rounded-r opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:scale-y-100 scale-y-80" />
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors duration-200">
                        <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-5 text-red-500 group-hover:text-red-600" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" fillRule="evenodd" />
                        </svg>
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-red-600">Logout</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" className="h-3 w-3 text-gray-400 ml-auto group-hover:text-red-500" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fillRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Menu;
