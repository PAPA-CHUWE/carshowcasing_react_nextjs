import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../Assets/logo.svg";
import { footerLinks } from "@/constants/Index";

const Footer = () => {
  return (
    <footer className='flex flex-col mt-5 border-t border-gray-100 text-black-100'>
      <div className='flex flex-wrap justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-16'>
        <div className='flex flex-col items-start justify-start gap-6'>
          <Image src={logo} alt='logo' width={118} height={18} className='object-contain' />
          <p className='text-base text-gray-700'>
            Car Hub   <br />
            All Rights Reserved &copy; 2023
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((item) => (
            <div key={item.title} className="footer__link">
              <h3 className="font-bold">{item.title}</h3>
              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-gray-500"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-wrap items-center justify-between px-6 py-10 mt-10 border-t border-gray-100 sm:px-16'>
        <p className='text-base text-gray-700'>
          <span className="font-mono uppercase bg-midnight text-[#000435]">Car Hub&nbsp;</span>
          <span className="font-mono">All Rights Reserved &copy; 2023</span>
        </p>
        <div className="transition ease-in-out delay-150 footer__copyrights-link hover:text-shadow-lg">
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
