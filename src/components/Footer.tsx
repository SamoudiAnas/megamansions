import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsTwitter,
  BsPinterest,
  BsInstagram,
} from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <div className="bg-black pt-12">
      <div className="container">
        <h1 className="mb-12 text-3xl text-white">Logo</h1>
        <div className="grid grid-cols-[1fr_2fr_2fr]">
          <div>
            <h3 className="font-bold text-white mb-4">Read More</h3>
            <ul>
              <li className="mb-1">
                <Link to="" className="text-gray-400">
                  About Us
                </Link>
              </li>
              <li className="mb-1">
                <Link to="" className="text-gray-400">
                  Security
                </Link>
              </li>
              <li className="mb-1">
                <Link to="" className="text-gray-400 ">
                  Terms and Conditions
                </Link>
              </li>

              <li className="mb-1">
                <Link to="" className="text-gray-400">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-1">
                <Link to="" className="text-gray-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="grid grid-cols-[1fr_1fr]">
              <div>
                <div className="pb-4">
                  <h3 className="font-bold text-white mb-4">Read More</h3>
                  <ul>
                    <li className="mb-1">
                      <Link to="" className="text-gray-400">
                        About Us
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link to="" className="text-gray-400">
                        Security
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="pb-4">
                  <h3 className="font-bold text-white mb-4">Read More</h3>
                  <ul>
                    <li className="mb-1">
                      <Link to="" className="text-gray-400">
                        About Us
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link to="" className="text-gray-400">
                        Security
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="pb-4">
                  <h3 className="font-bold text-white mb-4">Read More</h3>
                  <ul>
                    <li className="mb-1">
                      <Link to="" className="text-gray-400">
                        About Us
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link to="" className="text-gray-400">
                        Security
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="pb-4">
                  <h3 className="font-bold text-white mb-4">Read More</h3>
                  <ul>
                    <li className="mb-1">
                      <Link to="" className="text-gray-400">
                        About Us
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link to="" className="text-gray-400">
                        Security
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex gap-6 mt-4">
              <BsFacebook className="text-white w-5 h-5 hover:cursor-pointer" />
              <BsTwitter className="text-white w-5 h-5 hover:cursor-pointer" />
              <BsPinterest className="text-white w-5 h-5 hover:cursor-pointer" />
              <BsInstagram className="text-white w-5 h-5 hover:cursor-pointer" />
            </div>
          </div>

          <div className="bg-[#191A25] ">
            <div className="py-8 border-b border-b-slate-600 text-center">
              <h5 className="text-sm text-white font-bold"> Support</h5>
              <p className="text-gray-400">
                We are <span className="text-green-500">Available</span> now
              </p>
            </div>

            <div className="py-8 border-b border-b-slate-600 text-center">
              <h5 className="text-sm text-white font-bold"> Support</h5>
              <p className="text-gray-400">
                We are <span className="text-green-500">Available</span> now
              </p>
            </div>

            <div className="py-8 border-b border-b-slate-600 text-center">
              <h5 className="text-sm text-white font-bold"> Support</h5>
              <p className="text-gray-400">
                We are <span className="text-green-500">Available</span> now
              </p>
            </div>

            <div className="py-8 border-b border-b-slate-600 text-center">
              <h5 className="text-sm text-white font-bold"> Support</h5>
              <p className="text-gray-400">
                We are <span className="text-green-500">Available</span> now
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center container text-white mt-24 py-6 border-t border-t-slate-600">
        &copy; Copyright Reserved - 2022 - <Link to="/">MegaMansions</Link>
      </p>
    </div>
  );
};

export default Footer;
