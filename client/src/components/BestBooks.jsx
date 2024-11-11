import { imageList } from "../data/ImageList";
import { FaStar } from "react-icons/fa";

const BestBooks = ({ handleOrderPopup }) => {
  return (
    <div className="py-10">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-md font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
            Trending Books
          </p>
          <h1 className="text-3xl font-bold">Best Books</h1>
          <p className="text-xs text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
            ipsam?
          </p>
        </div>
        {/* Card Section */}
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-3 sm:gap-5 place-items-center">
          {imageList.map((book) => {
            return (
              <div
                data-aos="zoom-in"
                data-aos-once="true"
                key={book.id}
                className="hover:bg-primary hover:text-white relative shadow-xl duration-200 group max-w-[300px] rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary"
              >
                <div className="h-[100px]">
                  <img
                    src={book.img}
                    alt=""
                    className="max-w-[100px] block mx-auto transform -translate-y-1/4 group-hover:scale-105 duration-300 shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>

                  <h1 className="text-xl font-bold">{book.title}</h1>

                  <p className="text-sm text-gray-500 group-hover:text-white duration-300 line-clamp-2">
                    {book.description}
                  </p>

                  <button
                    onClick={handleOrderPopup}
                    className="bg-gradient-to-r from-primary to-secondary rounded-full px-4 py-2 mt-4 hover:scale-105 duration-200 group-hover:bg-white text-white "
                  >
                    Order Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestBooks;
