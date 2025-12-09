"use client";
import Link from "next/link";
import React from "react";

const Page404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-6xl bg-white dark:bg-[#0f172a] shadow-xl rounded-2xl flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 lg:gap-20 p-10 lg:p-16">

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-[3rem] sm:text-[4.5rem] font-extrabold leading-tight text-p dark:text-Primary">
            OOPS!
          </h1>

          <h3 className="text-Primary dark:text-slate-400 text-[1rem] sm:text-[1.3rem] mt-2">
            Looks like big foot has broken the link
          </h3>

          <Link
            href="/"
            className="inline-block mt-10 sm:mt-12 py-3 px-8 sm:px-10 text-sm sm:text-base rounded-full bg-Primary text-white font-medium transition hover:bg-Primary/90"
          >
            Back to homepage
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-[80%] sm:w-[60%] lg:w-[40%] mx-auto">
          <img
            src="https://i.ibb.co/HdHH4Pb/Frame-6.png"
            alt="illustration"
            className="w-full drop-shadow-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default Page404;

                    