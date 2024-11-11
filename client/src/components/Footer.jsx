import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { FooterLinks } from "../data/FooterLinks";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* {Company Details} */}
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl font-bold mb-3">Books Store</h1>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis facilis provident iste nemo.{""}
            </p>
            <br />
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Katpadi, TamilNadu</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 9876543210</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
          {/* {Links Section} */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => {
                    return (
                      <li
                        key={data.id}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500"
                      >
                        <span>&#11162;</span>
                        <span> {data.title} </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => {
                    return (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                        <span>&#11162;</span>
                        <span> {data.title} </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => {
                    return (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                        <span>&#11162;</span>
                        <span> {data.title} </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright Section */}
        <div>
          <div className="border-t-2 border-gray-300">
            <p className="text-center py-10">
              Copyright &copy; 2023. All rights reserved || Made with ❤️ by
              Ganesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
