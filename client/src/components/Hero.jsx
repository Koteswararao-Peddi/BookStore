import Book1 from "../assets/books/Book1.jpg";
import Book2 from "../assets/books/Book2.jpg";
import Book3 from "../assets/books/Book3.jpg";
import vector from "../assets/website/blue-pattern.png";
import { useState } from "react";
import { imageList } from "../data/ImageList";
import AOS from "aos";

const Hero = ({handleOrderPopup}) => {
  const [imageId, setImageId] = useState(Book2);

  const [title, setTitle] = useState("His Life will forever be Changed");

  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto fugit omnis odit veniam exercitationem? Voluptatem dolorem fugit fugiat odit"
  );

  const bgImage = {
    backgroundImage: `url(${vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <div
      className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
      style={bgImage}
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* text content */}
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1
              data-aos="zoom-out"
              data-aos-duration="500"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              {title}
              <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary text-right text-sm px-3 py-4">
                by Anonymous
              </p>
            </h1>
            <p
              data-aos="slide-up"
              data-aos-duration="500"
              data-aos-delay="100"
              className="text-sm "
            >
              {description}
            </p>
            <div>
              <button
              onClick={handleOrderPopup}
              data-aos = "zoom-in" className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200">
                Order Now
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
            {/* Main Image */}
            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
              <img
              data-aos="zoom-in"
              data-aos-once='true'
                src={imageId}
                alt=""
                className="w-[300px] sm:h-[450px] sm:w-[450px] h-[300px] sm:scale-125 object-contain mx-auto "
              />
            </div>
            {/* Other Images */}
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1  ">
              {imageList.map((image) => {
                return (
                  <img
                    key={image.id}
                    src={image.img}
                    alt=""
                    className="max-w-[100px] h-[100px] object-contain  hover:scale-110 duration-200 inline-block"
                    onClick={() => {
                      setImageId(image.img);
                      setTitle(image.title);
                      setDescription(image.description);
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
