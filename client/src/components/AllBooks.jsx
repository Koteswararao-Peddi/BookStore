import React from "react";
import { imageList2 } from "../data/ImageList";
import { FaStar } from "react-icons/fa";

const AllBooks = () => {
  return (
    <div className="py-10">
      <div className="container">
        {/* {Header} */}
        <div
          data-aos="slide-up"
          className="text-center mb-14 max-w-[400px] mx-auto "
        >
          <p className="text-sm bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ">
            Best Books
          </p>
          <h1 className="text-3xl font-bold  ">Top Books</h1>
          <p className="text-xs text-gray-400 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
            culpa.{""}
          </p>
        </div>
        {/* {Card} */}
        <div data-aos="slide-up">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 ">
            {imageList2.map((book) => {
              return (
                <div className="space-y-3" key={book.id}>
                  <img
                    className=" h-[200px] w-[150px] object-cover rounded-md "
                    src={book.img}
                    alt="/"
                  />
                  <div>
                    <h2 className="font-semibold ">{book.title}</h2>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      {book.author}
                    </p>
                    <div className="flex gap-1 items-center">
                      <FaStar className="text-yellow-500" />
                      <span>{book.rating}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* {Button} */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-4 rounded-full">
              View All Books
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
