// here I am importing the icons
import Link from "next/link";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";


export default function Navbar() {
  return (
    <>
      {/* below is the first and upper part of navbar according to the figma design. */}
      <div className="flex items-center bg-headerBlue h-[46px]">
        <h6 className="">
          {/* using call icon */}
          <FontAwesomeIcon
            icon={faPhone}
            className="text-white h-4 w-4 ml-[22px]"
          />
        </h6>
        <h6 className="font-semibold ml-[3px] text-headerFont text-white">
          (225) 555-0118
        </h6>
        <h6>
          {/* using mail icon */}
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-white h-4 w-4 ml-[22px]"
          />
        </h6>
        <h6 className="font-semibold ml-[3px] text-headerFont text-white">
          michelle.rivera@example.com
        </h6>
        <h6 className="font-bold ml-auto mr-auto text-headerFont text-white">
          Follow Us and get a chance to win 80% off
        </h6>
        <h6 className=" font-bold text-headerFont text-white">Follow us : </h6>
        <h6 className="flex gap-[8px] ml-[8px] mr-[22px]">
          {/* Instagram Icon */}
          <FontAwesomeIcon icon={faInstagram} className="text-white h-4 w-4" />

          {/* YouTube Icon */}
          <FontAwesomeIcon icon={faYoutube} className="text-white h-4 w-4" />

          {/* Facebook Icon  */}
          <FontAwesomeIcon icon={faFacebook} className="text-white h-4 w-4" />

          {/* Twitter Icon */}
          <FontAwesomeIcon icon={faTwitter} className="text-white h-4 w-4" />
        </h6>
      </div>
      {/* below is the first and upper part of navbar according to the figma design. */}
      <div className="flex h-[58px] items-center">
        <div className="flex items-center h-[58px] w-[175px] ml-[38px]">
          <h3 className="text-headerBlue font-extrabold text-[24px] ">
            Bandage
          </h3>
        </div>
        <div className=" w-[361px] h-[25px] ml-[16.5px]  ">
          <ul className="flex gap-[15px]">
            <Link href="/" className="text-headerFont text-headergrey">
              Home
            </Link>
            <Link href="/" className="flex text-headerFont text-headergrey">
              Shop
              <span className="w-[5.7px] h-[10px] mt-[10px]">
              <FontAwesomeIcon icon={faCaretDown} className="w-[3+px] h-[10px] ml-[3px]" />

              </span>              
            </Link>
            

            
            <Link href="/" className="text-headerFont text-headergrey">
              About
            </Link>
            <Link href="/" className="text-headerFont text-headergrey">
              Blog
            </Link>
            <Link href="/" className="text-headerFont text-headergrey">
              Contact
            </Link>
            <Link href="/" className="text-headerFont text-headergrey">
              Pages
            </Link>
          </ul>
        </div>
        <div className="flex items-center w-[324px] h-[54px] mt-[2px] ml-[457px] text-headerskyblue">
          <div className="flex justify-center items-center gap-[5px] w-[166px] h-[54px] ">
            <FontAwesomeIcon icon={faUser} className="h-[12px] w-[12px] " />
            <Link href="/">Login / Register</Link>
          </div>
          <div className=" flex items-center w-[46px] h-[46px]">
            <FontAwesomeIcon icon={faSearch} className="w-4 h-4 " />
          </div>
          <div className=" flex items-center w-[36px] h-[46px]">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="w-[15px] h-[15px]"
            />
            <span className="rounded-full">1</span>
          </div>
          <div className=" flex items-center w-[36px] h-[46px]">
            <FontAwesomeIcon icon={faHeart} className=" w-[16px] h-[15px]" />
            <span className="rounded-full">1</span>
          </div>
        </div>
      </div>
    </>
  );
}
