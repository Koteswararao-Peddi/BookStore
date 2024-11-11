import Logo from "../assets/website/logo.png";
import { Menu } from "../data/Menu.js";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { DropdownLinks } from "../data/DropdownLinks.js";
import DarkMode from "./DarkMode.jsx";

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container py-3 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="/" className="w-10" />
              Books
            </a>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="px-4">
              <DarkMode />
            </div>
            <ul className="hidden md:flex items-center gap-4">
              {Menu.map((menu) => {
                return (
                  <li>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-primary duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                );
              })}
              <li className="group relative cursor-pointer ">
                <a href="/#" className="flex items-center h-[72px] gap[2px]">
                  Quick Links
                  <span>
                    <FaCaretDown className="transition duration-300 group-hover:rotate-180" />
                  </span>
                </a>

                <div className="absolute -left-14 z-[10] hidden group-hover:block text-black bg-white dark:bg-gray-900 dark:text-white p-2 shadow-md">
                  <ul>
                    {DropdownLinks.map((data, index) => {
                      return (
                        <li key={index}>
                          <a
                            href={data.link}
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                          >
                            {data.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            </ul>
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-3 hover:scale-105 duration-300"
            >
              Order
              <FaCartShopping className="text-xl text-white drop-shadow-lg cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
