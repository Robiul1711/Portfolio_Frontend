import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const CommonButton = ({text,link,icon,iconColor,className}) => {
  return (
    <div>
          <Link href={link}
            className="group relative flex border border-Primary/50 cursor-pointer items-center rounded-full bg-transparent"
          >
            <div
              className="relative flex items-center overflow-hidden"
              style={{ minWidth: "180px" }}
            >
              <span className="flex h-11 w-11 items-center rounded-full bg-Primary px-3 transition-all duration-500 ease-in-out group-hover:w-full group-hover:justify-between">
                <FaArrowRightLong className="text-black transform translate-x-0 transition-transform duration-500 ease-in-out group-hover:translate-x-2" />
                <span className="absolute right-6 translate-y-8 font-semibold text-black transition-all duration-500 ease-in-out group-hover:translate-y-0">
                  {text}
                </span>
              </span>
              <p className="absolute right-6 font-semibold opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-y-8 text-white">
             {text}
              </p>
            </div>
          </Link>
    </div>
  )
}

export default CommonButton