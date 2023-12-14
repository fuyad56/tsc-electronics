import React from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import AboutImage from "../../assets/image/who we are.png";
import VisionImage from "../../assets/image/target.png";
import historyImage from "../../assets/image/history.png";

export default function About() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* About Us */}
      <div className="relative isolate overflow-hidden pt-24 pb-10 sm:pb-4 sm:pt-32 mx-5 sm:mx-10 lg:mx-40">
        <img
          src={AboutImage}
          alt=""
          className="max-w-full w-full rounded-3xl"
        />
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-4xl mt-6 sm:mt-10 text-center font-semibold tracking-tight text-[#252525] sm:text-6xl">
              About us
            </h2>
            <p className="mt-6 text-base font-medium text-gray-700">
              TSC, the cutting-edge multinational powerhouse in electrical,
              electronics, automobiles, and various appliances stands as a
              beacon of innovation with an expansive research and innovation
              infrastructure that ranks among the world's most advanced. Nestled
              under the overarching umbrella of the TSC Group headquartered in
              Bangladesh, our global impact is fueled by a network of
              subsidiaries committed to pushing the boundaries of technological
              excellence. Today, TSC boasts a formidable workforce exceeding
              30,000 professionals, strategically distributed across 22
              state-of-the-art production bases encompassing over 700 acres of
              factory space. Our commitment to excellence is unwavering,
              reflected in our annual production capacity of a staggering 10
              million units, meticulously tailored to meet the dynamic demands
              of the market. As a trailblazing force in the industry, TSC is
              revered for its unparalleled prowess in producing electrical and
              electronic goods. Our reputation is synonymous with an unbeatable
              blend of quality, cost-efficiency, groundbreaking design, and
              relentless innovation. TSC is a giant among manufacturers, setting
              the gold standard for excellence and redefining the competitive
              landscape in every aspect of our operations.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"></div>
        </div>
      </div>

      {/* Our Vision */}
      <div className="relative isolate overflow-hidden pb-10 sm:pb-4 sm:pt-32 mx-5 sm:mx-10 lg:mx-40">
        <img
          src={VisionImage}
          alt=""
          className="max-w-full w-full rounded-3xl"
        />
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-4xl mt-6 sm:mt-10 text-center font-semibold tracking-tight text-[#252525] sm:text-6xl">
              Our Vision
            </h2>
            <p className="mt-6 text-base font-medium text-gray-700">
              TSC, the cutting-edge multinational powerhouse in electrical,
              electronics, automobiles, and various appliances stands as a
              beacon of innovation with an expansive research and innovation
              infrastructure that ranks among the world's most advanced. Nestled
              under the overarching umbrella of the TSC Group headquartered in
              Bangladesh, our global impact is fueled by a network of
              subsidiaries committed to pushing the boundaries of technological
              excellence. Today, TSC boasts a formidable workforce exceeding
              30,000 professionals, strategically distributed across 22
              state-of-the-art production bases encompassing over 700 acres of
              factory space. Our commitment to excellence is unwavering,
              reflected in our annual production capacity of a staggering 10
              million units, meticulously tailored to meet the dynamic demands
              of the market. As a trailblazing force in the industry, TSC is
              revered for its unparalleled prowess in producing electrical and
              electronic goods. Our reputation is synonymous with an unbeatable
              blend of quality, cost-efficiency, groundbreaking design, and
              relentless innovation. TSC is a giant among manufacturers, setting
              the gold standard for excellence and redefining the competitive
              landscape in every aspect of our operations.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"></div>
        </div>
      </div>

      {/* Our History */}
      <div className="relative isolate overflow-hidden pb-10 sm:pb-4 sm:pt-32 mx-5 sm:mx-10 lg:mx-40">
        <img
          src={historyImage}
          alt=""
          className="max-w-full w-full rounded-3xl"
        />
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-4xl mt-6 sm:mt-10 text-center font-semibold tracking-tight text-[#252525] sm:text-6xl">
              Our History
            </h2>
            <p className="mt-6 text-base font-medium text-gray-700">
              Founded in 2014, our company embarked on a transformative journey
              in the electronic industry, focusing on the manufacturing of
              lighting solutions, fans, and switches. Since our inception, we
              have been dedicated to delivering products that embody innovation,
              quality, and functionality. As we ventured into the realm of
              electrical appliances, our commitment to excellence became the
              cornerstone of our operations. Today, our brand has become
              synonymous with trust and reliability in the market. Our product
              line encompasses a range of lighting solutions, fans designed for
              optimal performance, and switches that exemplify cutting-edge
              technology. Our rapid growth is fueled by a dynamic approach to
              meeting consumer needs, ensuring competitive pricing, and
              providing unparalleled after-sales services. In just a few years,
              we have successfully secured a significant market share,
              establishing ourselves as a dominant player in the electrical and
              electronic sector. Looking ahead, our vision is to continually
              expand our product offerings and market presence, solidifying our
              position as a leading force in the industry. With a commitment to
              innovation and customer satisfaction, we are poised to shape the
              future of electronic solutions for years to come.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"></div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
