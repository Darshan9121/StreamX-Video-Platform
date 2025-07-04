import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#231010] w-full px-2  flex flex-col  items-center  border-b-2 text-white border-red-500 ">
      <div className="flex justify-center items-center h-10  w-fit">
        {/* Logo placeholder */}
        <div className="w-10 h-20 flex items-center p-0">
        <svg
                className="w-full h-full text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
        </div>
        <p className='text-2xl text-left'>StreamX</p>
      </div>
    </footer>
  );
};

export default Footer;