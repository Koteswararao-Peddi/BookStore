import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Narayan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 5,
    name: "Satya Narayan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pb-10">
      <div className="container">
        {/* {Header} */}
        <div
          data-aos="slide-up"
          className="text-center mb-14 max-w-[400px] mx-auto "
        >
          <p className="text-sm bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ">
            What our Customer's Say
          </p>
          <h1 className="text-3xl font-bold  ">Testimonial</h1>
          <p className="text-xs text-gray-400 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
            culpa.{""}
          </p>
        </div>
        {/* {Card Section} */}
        <div data-aos='zoom-in'>
          <Slider {...settings}>
            {testimonialData.map((data) => {
              return (
                <div key={data.id}>
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative ">
                    {/* {Image} */}
                    <div>
                      <img
                        className=" rounded-full w-20 h-20 object-cover "
                        src={data.img}
                        alt="/"
                      />
                    </div>
                    {/* {Name & Text} */}
                    <div>
                      <div>
                        <p className="text-gray-500 text-sm">{data.text}</p>
                        <h1 className=" text-xl font-bold text-black/80 dark:text-white ">
                          {data.name}
                        </h1>
                      </div>
                    </div>
                    <p className="absolute text-black/20 dark:text-white/20 top-0 right-0 text-9xl z-10 font-serif ">
                      ,,
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
