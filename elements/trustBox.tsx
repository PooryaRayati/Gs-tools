"use client";


export default function TrustBox() {

    return (
        <div className="w-full flex justify-center px-10">
            <div className=" BoxShadow flex items-center w-full bg-white rounded-4xl ">
                <div className="box flex items-center flex-1">
                    <div className="content flex items-center h-full flex-1 justify-end pr-5 gap-5 rounded-l-4xl hover:bg-red-100 transition-colors duration-300 ease-in-out py-8">
                        <div className="flex flex-col text-right">
                            <b className="top_text">پشتیبانی تخصصی</b>
                            <span className="bottom_text opacity-65 text-sm">مشاوره قبل از خرید</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 14 14">
                            <g fill="none" fillRule="evenodd" clipRule="evenodd">
                                <path fill="#8fbffa" d="m1.575 7.24l-.039-.43C1.326 4.26 3.312 1.577 7 1.577s5.675 2.683 5.464 5.233l-.039.427a2.6 2.6 0 0 1 1.303 2.273l.23-2.569v-.004C14.246 3.478 11.532.077 7 .077C2.467.077-.246 3.478.04 6.937v.004l.232 2.575h.006A2.6 2.6 0 0 1 1.575 7.24"></path>
                                <path fill="#2859c5" d="M2.648 6.902a2.596 2.596 0 0 0-2.36 2.812l.161 1.84a2.596 2.596 0 0 0 5.172-.453l-.16-1.839a2.596 2.596 0 0 0-2.813-2.36m8.71 0a2.596 2.596 0 0 1 2.36 2.812l-.161 1.84a2.596 2.596 0 1 1-5.172-.453l.16-1.839a2.596 2.596 0 0 1 2.813-2.36"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="content flex items-center h-full flex-1 justify-end pr-5 gap-5 hover:bg-red-100 transition-colors duration-300 ease-in-out py-7">
                        <div className="flex flex-col text-right">
                            <b className="top_text">تضمین اصالت کالا</b>
                            <span className="bottom_text opacity-65 text-sm">کالاهای اصل و معتبر</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
                            <g fill="none">
                                <path fill="#0500ff" d="M3.9 5.6L12 3v18c-5.786-2.4-8.1-7-8.1-9.6z"></path>
                                <path fill="url(#SVGS7Lkadyu)" d="M20.1 5.6L12 3v18c5.786-2.4 8.1-7 8.1-9.6z"></path>
                                <defs>
                                    <linearGradient id="SVGS7Lkadyu" x1={17.948} x2={11.967} y1={1.74} y2={20.797} gradientUnits="userSpaceOnUse">
                                        <stop offset={0.02} stopColor="#00f"></stop>
                                        <stop offset={0.08} stopColor="#0094ff"></stop>
                                        <stop offset={0.16} stopColor="#48ff91"></stop>
                                        <stop offset={0.42} stopColor="#0094ff"></stop>
                                        <stop offset={0.68} stopColor="#0038ff"></stop>
                                        <stop offset={0.9} stopColor="#0500ff"></stop>
                                    </linearGradient>
                                </defs>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="box flex items-center flex-1">
                    <div className="content flex items-center h-full flex-1 justify-end pr-10 gap-5 hover:bg-red-100 transition-colors duration-300 ease-in-out py-7">
                        <div className="flex flex-col text-right">
                            <b className="top_text">هفت روز بازگشت کالا</b>
                            <span className="bottom_text opacity-65 text-sm">خرید با خیال راحت</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 80 80">
                            <g fill="none">
                                <path fill="#f2994a" fillRule="evenodd" d="M40 22v44l26-8V33.867L47.864 38z" clipRule="evenodd"></path>
                                <path fill="#eb5757" d="m66 18l-26 4l7.864 16L72 32.5z"></path>
                                <path fill="#f2c94c" fillRule="evenodd" d="M40 22v44l-26-8V33.867L32.136 38z" clipRule="evenodd"></path>
                                <path fill="#f2994a" d="m14 18l26 4l-7.864 16L8 32.5z"></path>
                                <path fill="#828282" fillRule="evenodd" d="m14 18l26 4l26-4l-26-4z" clipRule="evenodd"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="content flex items-center h-full  flex-1 justify-end pr-10 gap-5 rounded-r-4xl hover:bg-red-100 transition-colors duration-300 ease-in-out py-7">
                        <div className="flex flex-col text-right">
                            <b className="top_text">ارسال سریع کالا</b>
                            <span className="bottom_text opacity-65 text-sm">ارسال به سراسر ایران</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 80 80">
                            <g fill="none">
                                <path fill="#56ccf2" stroke="#56ccf2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M50 25a2 2 0 0 1 2-2h8.385a4 4 0 0 1 3.241 1.656L74 39H50z"></path>
                                <path fill="#f2c94c" fillRule="evenodd" d="M74 39H50v16h4.885q.117-.42.287-.828A7.39 7.39 0 0 1 69.115 55H74z" clipRule="evenodd"></path>
                                <path fill="#f2c94c" d="M50 39v-2a2 2 0 0 0-2 2zm24 0h2a2 2 0 0 0-2-2zM50 55h-2a2 2 0 0 0 2 2zm4.885 0v2a2 2 0 0 0 1.925-1.459zm.287-.828l-1.848-.766zm4-4l.765 1.847zm5.656 0l.766-1.848zm4 4l-1.847.765zm.287.828l-1.925.541A2 2 0 0 0 69.115 57zM74 55v2a2 2 0 0 0 2-2zM50 41h24v-4H50zm2 14V39h-4v16zm2.885-2H50v4h4.885zm1.925 2.541q.085-.306.21-.604l-3.696-1.53a9 9 0 0 0-.365 1.052zm.21-.604a5.4 5.4 0 0 1 2.917-2.918l-1.53-3.695a9.4 9.4 0 0 0-5.083 5.082zm2.917-2.918a5.4 5.4 0 0 1 4.126 0l1.53-3.695a9.4 9.4 0 0 0-7.187 0zm4.126 0a5.4 5.4 0 0 1 2.918 2.918l3.695-1.53a9.4 9.4 0 0 0-5.082-5.083zm2.918 2.918q.122.297.209.604l3.85-1.082a9 9 0 0 0-.364-1.053zM74 53h-4.885v4H74zm-2-14v16h4V39z"></path>
                                <path fill="#828282" stroke="#828282" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M59.172 50.172a7.39 7.39 0 1 1 5.656 13.655a7.39 7.39 0 0 1-5.656-13.655"></path>
                                <path fill="#f2994a" fillRule="evenodd" d="M10 15a4 4 0 0 0-4 4v36h5.885q.117-.42.287-.828A7.39 7.39 0 0 1 26.115 55H50V19a4 4 0 0 0-4-4z" clipRule="evenodd"></path>
                                <path fill="#f2994a" d="M6 55H4a2 2 0 0 0 2 2zm5.885 0v2a2 2 0 0 0 1.925-1.459zm.287-.828l1.847.765zm9.656-4l.766-1.848zm4 4l-1.847.765zm.287.828l-1.925.541A2 2 0 0 0 26.115 57zM50 55v2a2 2 0 0 0 2-2zM8 19a2 2 0 0 1 2-2v-4a6 6 0 0 0-6 6zm0 36V19H4v36zm3.885-2H6v4h5.885zm1.925 2.541q.085-.306.21-.604l-3.696-1.53a9 9 0 0 0-.365 1.052zm.21-.604a5.4 5.4 0 0 1 2.917-2.918l-1.53-3.695a9.4 9.4 0 0 0-5.083 5.082zm2.917-2.918a5.4 5.4 0 0 1 4.126 0l1.53-3.695a9.4 9.4 0 0 0-7.187 0zm4.126 0a5.4 5.4 0 0 1 2.918 2.918l3.695-1.53a9.4 9.4 0 0 0-5.082-5.083zm2.918 2.918q.122.297.209.604l3.85-1.082a9 9 0 0 0-.364-1.053zM50 53H26.115v4H50zm-2-34v36h4V19zm-2-2a2 2 0 0 1 2 2h4a6 6 0 0 0-6-6zm-36 0h36v-4H10z"></path>
                                <path fill="#828282" stroke="#828282" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M16.172 50.172a7.39 7.39 0 1 1 5.656 13.655a7.39 7.39 0 0 1-5.656-13.655"></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}