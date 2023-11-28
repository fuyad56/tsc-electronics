import React from "react";
import fanBannerImage from "../../image/tsc-2.jpg";
import fanImage from "../../image/tschf.png";
import lightBannerImage from "../../image/tsc-1.jpg";
import lightImage from "../../image/The Square Marketed Company (1).png";
import switchBannerImage from "../../image/tsc-4.jpg";
import switchImage from "../../image/introducing.png";

export default function Overview() {
  return (
    <div>
      {/* Product -- Fan */}
      <div>
        <div>
          <img
            src={fanBannerImage}
            alt="banner"
            className="h-auto max-w-full hover:cursor-pointer"
          />
          <div className="text-center p-8 xl:hidden">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Lorem ipsum dolor sit.
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              officiis cum, sapiente veritatis hic asperiores inventore quod ad
              placeat iure magnam, perferendis atque odio laboriosam explicabo
              vero, minus voluptas! Ab inventore, quibusdam ipsum dolores aut
              veritatis a sint. Ex, dolore.
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-6 items-center hover:cursor-pointer">
          <img
            src={fanImage}
            alt="fan img"
            className="h-auto w-[750px] lg:max-w-full"
          />
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Lorem ipsum dolor sit.
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

      {/* Product -- switch */}
      <div>
        <div>
          <img
            src={lightBannerImage}
            alt="banner"
            className="h-auto max-w-full hover:cursor-pointer"
          />
        </div>
        <div className="flex flex-col xl:flex-row gap-6 items-center hover:cursor-pointer">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Lorem ipsum dolor sit.
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
        <div className="text-center p-8 xl:hidden">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Lorem ipsum dolor sit.
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis cum, sapiente veritatis hic asperiores inventore quod ad
            placeat iure magnam, perferendis atque odio laboriosam explicabo
            vero, minus voluptas! Ab inventore, quibusdam ipsum dolores aut
            veritatis a sint. Ex, dolore.
          </p>
        </div>
      </div>

      {/* Product -- Light */}
      <div>
        <div>
          <img
            src={switchBannerImage}
            alt="banner"
            className="h-auto max-w-full hover:cursor-pointer"
          />
          <div className="text-center p-8 xl:hidden">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Lorem ipsum dolor sit.
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              officiis cum, sapiente veritatis hic asperiores inventore quod ad
              placeat iure magnam, perferendis atque odio laboriosam explicabo
              vero, minus voluptas! Ab inventore, quibusdam ipsum dolores aut
              veritatis a sint. Ex, dolore.
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-6 items-center hover:cursor-pointer">
          <img
            src={switchImage}
            alt="fan img"
            className="h-auto w-[750px] lg:max-w-full"
          />
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Lorem ipsum dolor sit.
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
