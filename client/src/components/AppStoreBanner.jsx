import React from "react";
import Playstore from "../assets/website/play_store.png";
import Appstore from "../assets/website/app_store.png";
import BoardImg from "../assets/website/board.png";

const BannerImage = {
  backgroundImage: `url(${BoardImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "norepeat",
  backgroundSize: "cover",
  height: "100%",
  weight: "100%",
};

const AppStoreBanner = () => {
  return (
    <div
      className="bg-gray-100 dark:bg-gray-800 text-white py-10 "
      style={BannerImage}
    >
      <div className="container">
        <div className="space-y-6 max-w-[xl] ">
          <h1
            data-aos="slide-up"
            className="text-2xl text-center sm:text-4xl font-semibold"
          >
            Read Books at your Fingertips
          </h1>
          <div
            data-aos="slide-up"
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a href="/#">
              <img
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                src={Playstore}
                alt="/"
              />
            </a>
            <a href="/#">
              <img
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                src={Appstore}
                alt="/"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
