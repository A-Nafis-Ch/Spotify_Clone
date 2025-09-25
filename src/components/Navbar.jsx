import { SlSocialSpotify } from "react-icons/sl";
import { RiHome5Line } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { BsBrowserSafari } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="w-full h-[60px] flex flex-row justify-around text-white items-center">
      <div className="icons text-white flex gap-5 ">

        <SlSocialSpotify className="h-[40px] md:h-[40px] lg:h-[40px] w-[30px] md:w-[30px] lg:w-[30px]" />

        <RiHome5Line className="h-[40px] md:h-[40px] lg:h-[40px] w-[30px] md:w-[30px] lg:w-[30px]" />

      </div>

      <div className="search-bar bg-[#2A2A2A] w-[300px] md:w-[400px] lg:w-[500px] h-[20px] rounded-full flex items-center p-5 ml-5">
        <IoIosSearch className="h-[40px] md:h-[40px] lg:h-[40px] w-[30px] md:w-[30px] lg:w-[30px]" />
        <input type="text" placeholder="What do you want to play?" className="bg-transparent border-none outline-none text-white ml-5 w-full" />

        <span className="mr-3">|</span>

        <BsBrowserSafari className="h-[40px] md:h-[40px] lg:h-[40px] w-[30px] md:w-[30px] lg:w-[30px]"/>
      </div>

      <div className="nav-buttons flex gap-2">
        <li className="flex gap-5">
          <ul className="font-bold" >Premium</ul>
          <ul className="font-bold">Support</ul>
          <ul className="font-bold">Download</ul>
          <ul>|</ul>
          <ul>Install App</ul>
          <ul>Sign up</ul>
        </li>

        <button className="text-black bg-white h-10 w-15 rounded-2xl">Login</button>
      </div>


    </nav>
  )
}

export default Navbar
