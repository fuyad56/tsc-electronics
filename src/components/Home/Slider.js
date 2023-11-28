import React, { useEffect, useState } from "react";
import TscImage1 from "../../image/tsc-1.jpg";
import TscImage2 from "../../image/tsc-2.jpg";
import TscImage3 from "../../image/tsc-3.jpg";
import TscImage4 from "../../image/tsc-4.jpg";
import TscImage5 from "../../image/tsc-5.jpg";

const images = [TscImage1, TscImage2, TscImage3, TscImage4, TscImage5];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }
  return (
    <div className="mt-0 mx-auto">
      <div className="slider p-5  relative items-center -z-40">
        <div
          className="left-arrow absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-200 hover:bg-gray-400 hover:text-white p-2 rounded-lg cursor-pointer"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide flex justify-center">
                <img className="w-[100%] rounded-lg" src={image} alt="images" />
              </div>
            )
        )}
        <div
          className="right-arrow absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-200 hover:bg-gray-400 hover:text-white p-2 rounded-lg cursor-pointer"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
