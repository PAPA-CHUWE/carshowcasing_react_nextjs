import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../Assets/logo.svg"
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className='absolute z-10 w-full'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex items-center justify-center'>
        <Image
          src={logo}
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>

      <CustomButton
      
        title='Sign In'
        btnType='button'
        containerStyles='text-[#ffffff] rounded-full bg-[#000435] min-w-[130px] transition ease-in-out delay-150 bg-[#000435] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'
      />
    </nav>
  </header>
  );
};

export default Navbar;
