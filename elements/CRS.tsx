"use client";

import { Carousel } from '@mantine/carousel';
import { useEffect, useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';

export default function Demo() {
  const list = ["carousel1.webp", "carousel2.webp", "carousel3.webp"]
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const [isSmall, setIsSmall] = useState(true)
  const [size, setSize] = useState("")


  useEffect(() => {
    function checkWidth() {
      setIsSmall(window.innerWidth < 769);
      if (window.innerWidth < 769) {
        window.innerWidth < 769 ? setSize("180") : setSize("440")
      } else {
        window.innerWidth > 769 && window.innerWidth < 1000 ? setSize("280") : setSize("440")
      }
    }

    checkWidth(); // بار اول
    window.addEventListener("resize", checkWidth);


    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <Carousel
      className='imgShadow carousel w-[85%] rounded-4xl'
      withIndicators
      slideSize="100%"
      height={size}
      slideGap={0}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.play()}
      emblaOptions={{
        dragFree: false,
        loop: true,
        align: "start",
      }}
    >
      {list.map((item) => (
        <Carousel.Slide key={item}>
          <div
            className="flex h-full p-20 items-center justify-center rounded-4xl text-lg text-gray-600 font-bold bg-cover bg-left hover:scale-102 duration-600 ease-in-out"
            style={{ backgroundImage: `url(/images/${item})` }}
          >
            <div className="grndit_box absolute w-full h-full rounded-4xl left-0 backdrop-blur-3xl"></div>
            <button className={`see_but flex items-center absolute left-10 bg-white py-2 px-5 rounded-4xl  ease-in-out bottom-6 ${isSmall ? "hidden" : ""}`}>
              مشاهده محصولات
              <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m11 5l-7 7l7 7m-7-7h16"></path>
              </svg>
            </button>

          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}



