"use client";

import LaptopHeader from "@/elements/laptopHeader";
import Demo from "@/elements/CRS"
import TrustBox from "@/elements/trustBox";
import Footer from "@/elements/footer";
import TableBox from "@/elements/table";
import SkeletonBox from "@/elements/skeleton";
import MobileHeader from "@/elements/mobileHeader";



export default function Home() {
  return (
    <div className="">
      <LaptopHeader />
      <MobileHeader/>
      <br />
      <div className="flex justify-center">
        <Demo />
      </div>
      <br />
      <br />
      <TrustBox />
      {/* <TableBox /> */}
      <br /><br /><br />
      <br />
      
      <div className="window_sk w-full flex items-center gap-7 px-10 justify-between ">
        <SkeletonBox />
        <SkeletonBox />
        <SkeletonBox />
        <SkeletonBox />
      </div>
      <br />
      <div className="window_sk w-full flex items-center gap-7 px-10 justify-between ">
        <SkeletonBox />
        <SkeletonBox />
        <SkeletonBox />
        <SkeletonBox />
      </div>


      <div className="mobile_sk">
        <div className="w-full flex items-center gap-7 px-10 justify-around ">
          <SkeletonBox />
          <SkeletonBox />
        </div>
        <br />
        <div className="w-full flex items-center gap-7 px-10 justify-around ">
          <SkeletonBox />
          <SkeletonBox />
        </div>
      </div>
      <br />
      <div className="mobile_sk">
        <div className="w-full flex items-center gap-7 px-10 justify-around ">
          <SkeletonBox />
          <SkeletonBox />
        </div>
        <br />
        <div className="w-full flex items-center gap-7 px-10 justify-around ">
          <SkeletonBox />
          <SkeletonBox />
        </div>
      </div>
      <br /><br /><br />

      <Footer />
    </div>
  );
}
