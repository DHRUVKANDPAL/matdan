'use client'
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
type Props = {};

const Footer = (props: Props) => {
   const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="w-full bg-blue-900 text-orange-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col items-center sm:items-start">
            <Logo />
            <p className="mt-4 text-sm text-orange-100 text-center sm:text-left">
              Leading the way in Online Voting Services
            </p>
          </div>

          <div>
            <h2 className="text-orange-200 font-semibold mb-4">
              Important Links
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-300 transition-colors">
                  Login as voter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300 transition-colors">
                  Login as Party 
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300 transition-colors">
                  Login as Election Commision
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300 transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-orange-200 font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <FiPhoneCall className="text-orange-500 h-4 w-4 mr-2" />
                <span>11111-22222</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="text-orange-500 h-4 w-4 mr-2" />
                <span>Matdan@gmail.com</span>
              </li>
              <li className="flex items-center">
                <GrLocation className="text-orange-500 h-4 w-4 mr-2" />
                <span>On your phone</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-orange-200 font-semibold mb-4">Working Hours</h2>
            <div className="flex items-center text-sm">
              <FaRegClock className="text-orange-500 h-4 w-4 mr-2" />
              <span>24/7 Available</span>
            </div>
          </div>
        </div>

        <div className="border-t text-sm border-white pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className=" text-orange-100 mb-4 sm:mb-0">
            © 2024 Matdan. All rights reserved.
          </p>
          <a
            href="#"
            className="text-orange-100 hover:text-orange-200 hover:underline transition-colors"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="text-orange-100 hover:text-orange-200 hover:underline transition-colors"
          >
            Privacy Policy
          </a>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-orange-200 hover:text-orange-300 transition-colors"
            >
              <BsLinkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-orange-200 hover:text-orange-300 transition-colors"
            >
              <BsGithub className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-orange-200 hover:text-orange-300 transition-colors"
            >
              <BsInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
