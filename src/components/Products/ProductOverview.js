import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

// Fan Images
import fanImage1 from "../../assets/fans/TSC Ceiling Net Fan Black 16.png";
import fanImage2 from "../../assets/fans/TSC Ceiling Net Fan Black.png";
import fanImage3 from "../../assets/fans/TSC Highspeed Fan.png";
import fanImage4 from "../../assets/fans/TSC Rapid-XR.png";
import fanImage5 from "../../assets/fans/TSC Rechargeable Table Fan.jpg";
import fanImage6 from "../../assets/fans/TSC Stand Fan.png";
import fanImage7 from "../../assets/fans/TSC Student Edition Z1 Fan.png";
import fanImage8 from "../../assets/fans/TSC Student Edition Z2 Fan.png";
import fanImage9 from "../../assets/fans/TSC Table Fan 12.png";
import fanImage10 from "../../assets/fans/TSC Table Fan 16.png";
import fanImage11 from "../../assets/fans/TSC ZR Table Fan.png";

// Light Images
import lightImage1 from "../../assets/lights/TSC Diamond 18W Emergency LED Bulb.jpg";
import lightImage2 from "../../assets/lights/TSC Super 10W AC LED Bulb.jpg";
import lightImage3 from "../../assets/lights/TSC Super 15W AC LED Bulb.jpg";
import lightImage4 from "../../assets/lights/TSC Super 20W AC LED Bulb.jpg";
import lightImage5 from "../../assets/lights/TSC Super 50W 3 Blade AC LED Bulb.jpg";
import lightImage6 from "../../assets/lights/TSC Super 5W AC LED Bulb.jpg";
import lightImage7 from "../../assets/lights/TSC Super 60W 4 Blade AC LED Bulb.jpg";
import lightImage8 from "../../assets/lights/TSC Super 7W AC LED Bulb.jpg";

// Appliances Images
import appliancesImage1 from "../../assets/switch/TSC 2 pin Plug.jpg";
import appliancesImage2 from "../../assets/switch/TSC Battan Holder.jpg";
import appliancesImage3 from "../../assets/switch/TSC Combine Backpart.jpg";
import appliancesImage4 from "../../assets/switch/TSC Combine Board.jpg";
import appliancesImage5 from "../../assets/switch/TSC Fuse.jpg";
import appliancesImage6 from "../../assets/switch/TSC Indicator.jpg";
import appliancesImage7 from "../../assets/switch/TSC Pendent holder.jpg";
import appliancesImage8 from "../../assets/switch/TSC Prime Gang Switch light.png";
import appliancesImage9 from "../../assets/switch/TSC Prime Gang Switch.png";
import appliancesImage10 from "../../assets/switch/TSC Socket.jpg";
import appliancesImage11 from "../../assets/switch/TSC Switch.jpg";

const productsList = {
  fans: [
    {
      id: 1,
      name: "TSC Ceiling Net Fan Black 16",
      href: "TSC-Ceiling-Net-Fan-Black-16",
      price: "BDT 550",
      imageSrc: fanImage1,
      imageAlt: "TSC-Ceiling-Net-Fan-Black-16",
    },
    {
      id: 2,
      name: "TSC Ceiling Net Fan Black",
      href: "TSC-Ceiling-Net-Fan-Black",
      price: "BDT 650",
      imageSrc: fanImage2,
      imageAlt: "TSC Ceiling Net Fan Black",
    },
    {
      id: 3,
      name: "TSC High speed Fan",
      href: "TSC-High-speed-Fan",
      price: "BDT 500",
      imageSrc: fanImage3,
      imageAlt: "TSC High speed Fan",
    },
    {
      id: 4,
      name: "TSC Rapid-XR",
      href: "TSC-Rapid-XR",
      price: "BDT 500",
      imageSrc: fanImage4,
      imageAlt: "TSC Rapid-XR",
    },
    {
      id: 5,
      name: "TSC Rechargeable Table Fan",
      href: "TSC-Rechargeable-Table-Fan",
      price: "BDT 650",
      imageSrc: fanImage5,
      imageAlt: "TSC Rechargeable Table Fan",
    },
    {
      id: 6,
      name: "TSC Stand Fan",
      href: "TSC-Stand-Fan",
      price: "BDT 800",
      imageSrc: fanImage6,
      imageAlt: "TSC Stand Fan",
    },
    {
      id: 7,
      name: "TSC Student Edition Z1 Fan",
      href: "TSC-Student-Edition-Z1-Fan",
      price: "BDT 1100",
      imageSrc: fanImage7,
      imageAlt: "TSC Student Edition Z1 Fan",
    },
    {
      id: 8,
      name: "TSC Student Edition Z2 Fan",
      href: "TSC-Student-Edition-Z2-Fan",
      price: "BDT 1000",
      imageSrc: fanImage8,
      imageAlt: "TSC Student Edition Z2 Fan",
    },
    {
      id: 9,
      name: "TSC Table Fan 12",
      href: "TSC-Table-Fan-12",
      price: "BDT 650",
      imageSrc: fanImage9,
      imageAlt: "TSC Table Fan 12",
    },
    {
      id: 10,
      name: "TSC Table Fan 16",
      href: "TSC-Table-Fan-16",
      price: "BDT 550",
      imageSrc: fanImage10,
      imageAlt: "TSC Table Fan 16",
    },
    {
      id: 11,
      name: "TSC ZR Table Fan",
      href: "TSC-ZR-Table-Fan",
      price: "BDT 1200",
      imageSrc: fanImage11,
      imageAlt: "TSC ZR Table Fan",
    },
  ],
  lights: [
    {
      id: 1,
      name: "TSC Diamond 18W Emergency LED Bulb",
      href: "TSC-Diamond-18W-Emergency-LED-Bulb",
      price: "BDT 240",
      imageSrc: lightImage1,
      imageAlt: "TSC Diamond 18W Emergency LED Bulb",
    },
    {
      id: 2,
      name: "TSC Super 10W AC LED Bulb",
      href: "TSC-Super-10W-AC-LED-Bulb",
      price: "BDT 250",
      imageSrc: lightImage2,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 3,
      name: "TSC Super 15W AC LED Bulb",
      href: "TSC-super-15W-AC-LED-Bulb",
      price: "600",
      imageSrc: lightImage3,
      imageAlt: "TSC Super 15W AC LED Bulb",
    },
    {
      id: 4,
      name: "TSC Super 20W AC LED Bulb",
      href: "TSC-Super-20W-AC-LED-Bulb",
      price: "BDT 400",
      imageSrc: lightImage4,
      imageAlt: "TSC Super 20W AC LED Bulb",
    },
    {
      id: 5,
      name: "TSC Super 50W 3 Blade AC LED Bulb",
      href: "TSC-Super-50W-3-Blade-AC-LED-Bulb",
      price: "BDT 500",
      imageSrc: lightImage5,
      imageAlt: "TSC Super 50W 3 Blade AC LED Bulb",
    },
    {
      id: 6,
      name: "TSC Super 5W AC LED Bulb",
      href: "TSC-Super-5W-AC-LED-Bulb",
      price: "BDT 500",
      imageSrc: lightImage6,
      imageAlt: "TSC Super 5W AC LED Bulb",
    },
    {
      id: 7,
      name: "TSC Super 60W 4 Blade AC LED Bulb",
      href: "TSC-Super-60W-4-Blade-AC-LED-Bulb",
      price: "BDT 500",
      imageSrc: lightImage7,
      imageAlt: "TSC Super 5W AC LED Bulb",
    },
    {
      id: 8,
      name: "TSC Super 7W AC LED Bulb",
      href: "TSC-Super-7W-AC-LED-Bulb",
      price: "BDT 500",
      imageSrc: lightImage8,
      imageAlt: "TSC Super 7W AC LED Bulb",
    },
  ],
  switches: [
    {
      id: 1,
      name: "TSC 2 pin Plug",
      href: "TSC-2-pin-Plug",
      price: "BDT 500",
      imageSrc: appliancesImage1,
      imageAlt: "TSC 2 pin Plug",
    },
    {
      id: 2,
      name: "TSC Button Holder",
      href: "TSC-Button-Holder",
      price: "BDT 600",
      imageSrc: appliancesImage2,
      imageAlt: "TSC Button Holder",
    },
    {
      id: 3,
      name: "TSC Combine Back part",
      href: "TSC-Combine-Back-part",
      price: "$89",
      imageSrc: appliancesImage3,
      imageAlt: "TSC Combine Backpart",
    },
    {
      id: 4,
      name: "TSC Combine Board",
      href: "TSC-Combine-Board",
      price: "$35",
      imageSrc: appliancesImage4,
      imageAlt: "TSC Combine Board",
    },
    {
      id: 5,
      name: "TSC Fuse",
      href: "TSC-Fuse",
      price: "BDT 600",
      imageSrc: appliancesImage5,
      imageAlt: "TSC Fuse",
    },
    {
      id: 6,
      name: "TSC Indicator",
      href: "TSC-Indicator",
      price: "$BDT 600",
      imageSrc: appliancesImage6,
      imageAlt: "TSC Indicator",
    },
    {
      id: 7,
      name: "TSC Pendent holder",
      href: "TSC-Pendent-holder",
      price: "BDT 600",
      imageSrc: appliancesImage7,
      imageAlt: "TSC Pendent holder",
    },
    {
      id: 8,
      name: "TSC Prime Gang Switch light",
      href: "TSC-Prime-Gang-Switch-light",
      price: "BDT 600",
      imageSrc: appliancesImage8,
      imageAlt: "TSC Prime Gang Switch light",
    },
    {
      id: 9,
      name: "TSC Prime Gang Switch",
      href: "TSC-Prime-Gang-Switch",
      price: "BDT 600",
      imageSrc: appliancesImage9,
      imageAlt: "TSC Prime Gang Switch",
    },
    {
      id: 10,
      name: "TSC Socket",
      href: "TSC-Socket",
      price: "BDT 600",
      imageSrc: appliancesImage10,
      imageAlt: "TSC Socket",
    },
    {
      id: 11,
      name: "TSC Switch",
      href: "TSC-Switch",
      price: "BDT 600",
      imageSrc: appliancesImage11,
      imageAlt: "TSC Switch",
    },
  ],
};

export default function ProductOverview() {
  const { category, product } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    if (productsList.hasOwnProperty(category)) {
      const categoryProducts = productsList[category];
      const selectedProduct = categoryProducts.find((p) => p.href === product);

      if (selectedProduct) {
        setProductData(selectedProduct);
      } else {
        console.error(
          `Product '${product}' not found in category '${category}'.`
        );
      }
    } else {
      console.error(`Category '${category}' not found.`);
    }
  }, [category, product]);

  if (!productData) {
    return (
      <div className="h-[100vh] flex justify-center items-center text-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="flex justify-center items-center h-[100vh] mx-8 sm:mx-20 mt-16">
        <div
          key={productData.id}
          className="flex flex-col md:flex-row justify-evenly items-center gap-16"
        >
          <img
            src={productData.imageSrc}
            alt={productData.imageAlt}
            className="h-full max-w-full w-[650px] hover:opacity-75 aspect-h-1 aspect-w-1 overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7"
          />
          <div className="w-90">
            <h3 className="mt-4 text-3xl font-semibold text-gray-700">
              {productData.name}
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {productData.imageAlt}
            </p>
            <p className="mt-1 text-base font-medium text-gray-900">
              {productData.price}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
