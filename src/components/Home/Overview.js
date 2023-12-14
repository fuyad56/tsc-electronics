import React from "react";
import fanBannerImage from "../../assets/image/tsc-2.jpg";
import fanImage from "../../assets/image/tschf.png";
import lightBannerImage from "../../assets/image/tsc-1.jpg";
import lightImage from "../../assets/image/The Square Marketed Company (1).png";
import switchBannerImage from "../../assets/image/tsc-4.jpg";
import switchImage from "../../assets/image/introducing.png";
import { useNavigate } from "react-router-dom";

export default function Overview() {
  const navigate = useNavigate();

  const handleNavigate = (location) => {
    navigate(location)
  }
  
  return (
    <div className="mb-20">
      {/* Product -- Fan */}
      <div onClick={() => handleNavigate("/products/fans")}>
        <div>
          <img
            src={fanBannerImage}
            alt="banner"
            className="h-auto max-w-full hover:cursor-pointer"
          />
        </div>
        <div className="flex flex-col-reverse xl:flex-row gap-6 items-center hover:cursor-pointer">
          <img
            src={fanImage}
            alt="fan img"
            className="h-auto w-[750px] lg:max-w-full"
          />
          <div className="text-center p-4 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              TSC Fans
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              officiis cum, sapiente veritatis hic asperiores inventore quod ad
              placeat iure magnam, perferendis atque odio laboriosam explicabo
              vero, minus voluptas! Ab inventore, quibusdam ipsum dolores aut
              veritatis a sint. Ex, dolore.
            </p>
          </div>
        </div>
      </div>

      {/* Product -- lights */}
      <div onClick={() => handleNavigate("/products/lights")}>
        <div>
          <img
            src={lightBannerImage}
            alt="banner"
            className="h-auto max-w-full hover:cursor-pointer"
          />
        </div>
        <div className="flex flex-col xl:flex-row gap-6 items-center hover:cursor-pointer">
          <div className="text-center p-4 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              TSC High Quality lights
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              officiis cum, sapiente veritatis hic asperiores inventore quod ad
              placeat iure magnam, perferendis atque odio laboriosam explicabo
              vero, minus voluptas! Ab inventore, quibusdam ipsum dolores aut
              veritatis a sint. Ex, dolore.
            </p>
          </div>
          <img
            src={lightImage}
            alt="fan img"
            className="h-auto w-[750px] lg:max-w-full"
          />
        </div>
      </div>

      {/* Product -- switches */}
      <div onClick={() => handleNavigate("/products/switches")}>
        <div>
          <img
            src={switchBannerImage}
            alt="banner"
            className="h-auto max-w-full hover:cursor-pointer"
          />
        </div>
        <div className="flex flex-col-reverse xl:flex-row gap-6 items-center hover:cursor-pointer">
          <img
            src={switchImage}
            alt="fan img"
            className="h-auto w-[750px] lg:max-w-full"
          />
          <div className="text-center p-4 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              TSC Best Switches on Competition
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              officiis cum, sapiente veritatis hic asperiores inventore quod ad
              placeat iure magnam, perferendis atque odio laboriosam explicabo
              vero, minus voluptas! Ab inventore, quibusdam ipsum dolores aut
              veritatis a sint. Ex, dolore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
