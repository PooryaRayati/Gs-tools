

export default function DashboardHeader() {

    return (
        <div className="w-[95%] flex items-center justify-between px-7 bg-violet-400/50 h-20 mt-2 rounded-3xl">
            <div className="">d</div>
            <div className="">d</div>
            <div className="flex items-center gap-3">
                <p className=" text-lg text-whitenp,"> 😎 سلام ادمین</p>
                <div className=" flex items-center justify-center border-1 border-violet-600 rounded-3xl p-2 bg-violet-600/10 ">
                    <svg className="text-violet-600" xmlns="http://www.w3.org/2000/svg" width="2.4em" height="2.4em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5Zm0 3.9a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0 7.9c2 0 6 1.09 6 3.08a7.2 7.2 0 0 1-12 0c0-1.99 4-3.08 6-3.08" />
                    </svg>
                </div>
            </div>
        </div>
    );
}