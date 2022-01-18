import {
  MenuIcon,
  SearchCircleIcon,
  SearchIcon,
} from '@heroicons/react/outline'
import { useState } from 'react'

const Dropdown = () => {
  return (
    <div className="w-full xl:hidden shadow-2xl md:hidden list-none flex top-0 sticky  justify-start items-end rounded-md bg-[#000b18]  text-white animate-slide-in ">
      <ul className="flex pl-4 space-y-3 flex-col font-semibold">
        <a href="">
          <li className="cursor-pointer">Marketplace</li>
        </a>
        <a href="">
          <li className="cursor-pointer">Stats</li>
        </a>
        <a href="">
          <li className="cursor-pointer">Resources</li>
        </a>
        <a href="">
          <li className="cursor-pointer">Search</li>
        </a>
        <a href="">
          <li className="cursor-pointer mb-5">Sign Up</li>
        </a>
      </ul>
    </div>
  )
}

const Navbar = () => {
  const [drop, setDrop] = useState(false)

  return (
    <nav className="flex flex-col z-50 top-0 sticky">
      <div className=" h-20 flex items-center text-white justify-between px-5 bg-[#000b18] top-0 z-50 sticky">
        <div className="flex items-center space-x-3 ">
          <div className="h-10 w-10 bg-blue-400 rounded-full"></div>
          <p className="font-semibold text-lg">{'NFT Marketplace'}</p>
        </div>

        <div className="space-x-10 items-center hidden md:flex">
          <p className=" text-sm cursor-pointer">{'Marketplace'}</p>
          <p className=" text-sm cursor-pointer">{'Stats'}</p>
          <p className=" text-sm cursor-pointer">{'Resources'}</p>
        </div>

        <div className=" items-center space-x-4 hidden md:flex">
          <SearchIcon className="text-white h-5 w-5 font-bold cursor-pointer" />
          <div className="h-10 bg-blue-500 text-center cursor-pointer w-24 flex items-center justify-center rounded-3xl">
            <p className="font-semibold">Sign Up</p>
          </div>
        </div>
        <div className="md:hidden">
          <MenuIcon
            className="h-8 w-8 text-white cursor-pointer "
            onClick={() => {
              if (drop == false) {
                setDrop(true)
              } else {
                setDrop(false)
              }
            }}
          />
        </div>
      </div>
      {drop && (
        <div>
          <Dropdown />
        </div>
      )}
    </nav>
  )
}

export default Navbar

// bg-gradient-to-b from-[#52585f] via-[#051c32] to-[#00498d]
