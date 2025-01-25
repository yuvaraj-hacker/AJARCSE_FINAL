import React, { useEffect, useRef, useState } from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import Homepage from "../../components/Homepage";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);

  // click outside to close
  const menuRef = useRef(null);
  const menuRef2 = useRef(null);
  // 

  // close menu when click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setDropdown1Open(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // 
  // close menu when click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef2.current && !menuRef2.current.contains(event.target)) {
        setIsMenuOpen2(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // 


  // Right ~ for header menu button
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleDropdown1 = () => {
    setDropdown1Open(!dropdown1Open);

  };
  const toggleDropdown2 = () => {
    setDropdown2Open(!dropdown2Open);

  };
  const togglemenuDropdown1 = () => {
    toggleMenu();
    toggleDropdown1();

  };
  const togglemenuDropdown2 = () => {
    toggleMenu();
    toggleDropdown2();
  };


  //Left ~ for sidebar menu button
  const toggleMenu2 = () => {
    setIsMenuOpen2(!isMenuOpen2);
  };


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <header ref={menuRef2}>
        <nav ref={menuRef} className="  dark:bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 bg-primary-dark-blue">
          {/* 1st half start */}
          <div className="hidden lg:block md:hidden max-w-full w-full mx-auto  ">
            <div className="lg:flex md:flex items-center gap-0 bg-primary-blue-color ">
              <Link to="/" onClick={scrollToTop}>
                <div role="button" className="pr-16 pl-10 max-w-sm flex justify-center items-center   gap-2 md:max-w-xs  w-full font-bold text-center   lg:text-3xl head-shap  bg-white py-4"
                >
                  {/* <img className=" drop-shadow h-12" src="logo/logo.png" alt="" /> */}
                  <img className=" drop-shadow    " src="/images/Logo.png" alt="" />
                  {/* <h1 className="text-primary-blue-color drop-shadow">
                  AJARCSE
                </h1> */}
                </div>
              </Link>
              <div className=" max-w-full w-full text-center font-semibold  lg:text-2xl text-sm text-white lg:py-0 md:py-0 py-2 px-2">
                The American Journal of Advanced Research in Computer Science & Engineering
              </div>
            </div>
          </div>
          {/* 2nd half start */}
          <div className="max-w-screen-2xl bg-primary-dark-blue w-full flex  items-center gap-0  justify-between mx-auto px-4 py-2">

            <a className="lg:hidden flex items-center space-x-3 rtl:space-x-reverse">
              <Link to='/'>
                <img className="  h-8" src="/images/Logo.png" alt="" />
              </Link>
              {/* <span className="self-center text-2xl font-semibold whitespace-nowrap  text-white">
                AJARCSE
              </span> */}
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <a
                className="  hidden  md:hidden text-white bg-primary-blue-color  hover:text-primary-blue-color hover:bg-white group  font-medium rounded-lg text-sm px-4 py-2 text-center lg:flex items-center gap-4"
                href="#"
              >
                <h1>Submission Portal</h1>
                <svg
                  className="h-4 w-4 text-white group-hover:text-primary-blue-color animate-ping"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </a>
              {/* mob right button start */}
              <button onClick={() => { toggleMenu(); setIsMenuOpen2(false) }} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary-blue-color rounded-lg md:hidden hover:text-primary-blue-color " >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
            <div
              className={`${isMenuOpen ? "flex" : "hidden"
                } items-center bg-primary-dark-blue absolute   lg:static md:right-5 right-0 justify-center rounded-lg  md:mt-0 mt-[280px] z-40 w-full md:flex md:w-auto lg:order-1 md:order-2`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-2 md:px-7  font-medium  rounded-lg   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 w-full text-center">
                <li onClick={toggleMenu}>
                  <Link to="/" onClick={() => { scrollToTop(); setDropdown1Open(false) }} className="block py-2 px-3 text-primary-blue-color rounded md:bg-transparent   md:p-0 hover:text-primary-blue-color border-b md:border-b-0 lg:border-b-0 hover:bg-gray-100  md:hover:bg-transparent w-full "
                    aria-current="page" >
                    Home
                  </Link>
                </li>
                <li>
                  <button id="dropdownNavbarLink1" onClick={toggleDropdown1} className="flex items-center justify-center w-full py-2 px-3 text-primary-blue-color rounded  md:hover:bg-transparent hover:bg-gray-100 md:border-0  hover:text-primary-blue-color border-b md:p-0 md:w-auto " >
                    Journal Overview
                    <svg className={`${dropdown1Open ? 'rotate-180' : 'rotate-0'} text-2xl duration-300 w-2.5 h-2.5 ms-2.5`} aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"  >
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                  </button>
                  {/* <!-- Dropdown menu --> */}
                  <div className="">
                    <div id="dropdownNavbar1" className={`${dropdown1Open ? "block" : "hidden"} z-10 font-normal  bg-primary-dark-blue divide-y divide-gray-100 border rounded-lg shadow w-50    absolute    dark:divide-gray-600 text-primary-blue-color lg:mt-4 ml-16 lg:-ml-8 md:-ml-6`} >
                      <ul className="p-2 text-xs  " aria-labelledby="dropdownLargeButton"  >
                        <li onClick={togglemenuDropdown1}>
                          <Link to="/aboutus" onClick={scrollToTop} className="block px-4 py-2 border-b rounded md:text-base   hover:bg-gray-100 hover:text-primary-blue-color dark:hover:bg-gray-600 dark:hover:text-white"  >
                            About
                          </Link>
                        </li>
                        <li onClick={togglemenuDropdown1}>
                          <Link to="/aim-nd-scope" onClick={scrollToTop} className="   xl:hidden block px-4 py-2 border-b md:text-base rounded hover:bg-gray-100 hover:text-primary-blue-color dark:hover:bg-gray-600 dark:hover:text-white"  >
                            Aim and Scope
                          </Link>
                        </li>
                        <li onClick={togglemenuDropdown1}>
                          <Link to="/editorial-board" onClick={scrollToTop} className="block px-4 py-2 border-b rounded md:text-base hover:bg-gray-100 hover:text-primary-blue-color dark:hover:bg-gray-600 dark:hover:text-white" >
                            Editorial Board
                          </Link>
                        </li>
                        <li onClick={togglemenuDropdown1}>
                          <Link to="/peerreview" onClick={scrollToTop} className="block px-4 py-2 border-b rounded hover:bg-gray-100 hover:text-primary-blue-color md:text-base dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Peer Review Process
                          </Link>
                        </li>
                        <li onClick={togglemenuDropdown1}>
                          <Link to="/publicationethic" onClick={scrollToTop} className="block px-4 py-2 border-b rounded md:text-base hover:bg-gray-100 hover:text-primary-blue-color dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Publication Ethics
                          </Link>
                        </li>
                        <li onClick={togglemenuDropdown1}>
                          <Link to="/abstracting" onClick={scrollToTop} className="block px-4 py-2 border-b rounded hover:bg-gray-100 hover:text-primary-blue-color md:text-base dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Abstracting and Indexing
                          </Link>
                        </li>
                        <li onClick={togglemenuDropdown1}>
                          <Link to="/articleProcess" onClick={scrollToTop} className="block px-4 py-2 border-b rounded md:text-base hover:bg-gray-100 hover:text-primary-blue-color dark:hover:bg-gray-600 dark:hover:text-white"  >
                            Article Processing Charges
                          </Link>
                        </li>
                        <li onClick={togglemenuDropdown1}>
                          <Link to="/issues" onClick={scrollToTop} className=" xl:hidden block px-4 py-2 border-b rounded md:text-base hover:bg-gray-100 hover:text-primary-blue-color dark:hover:bg-gray-600 dark:hover:text-white"  >
                            Issues
                          </Link>
                        </li>
                        <li onClick={togglemenuDropdown1}>
                          <Link to="/author-guidelines" onClick={scrollToTop} className=" xl:hidden block px-4 py-2 border-b md:text-base rounded hover:bg-gray-100 hover:text-primary-blue-color dark:hover:bg-gray-600 dark:hover:text-white"  >
                            Author Guidelines
                          </Link>
                        </li>
                        <li onClick={togglemenuDropdown1}>
                          <Link to="/copyright-form" onClick={scrollToTop} className=" xl:hidden block px-4 py-2 border-b md:text-base rounded hover:bg-gray-100 hover:text-primary-blue-color dark:hover:bg-gray-600 dark:hover:text-white"  >
                            Copyright Form
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li onClick={() => { toggleMenu(); setDropdown1Open(false); }}>
                  <Link to="/contactus" onClick={scrollToTop} className="block py-2 px-3 text-primary-blue-color  md:text-base rounded hover:bg-gray-100  md:hover:bg-transparent hover:text-primary-blue-color border-b lg:border-b-0 md:border-b-0 md:p-0 " >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className={`${isMenuOpen2 ? "flex" : "lg:hidden md:hidden hidden"
                } items-center absolute  lg:relative md:right-5 right-0 justify-center rounded-lg bg-primary-dark-blue lg:mt-0 md:mt-0 mt-[580px] z-40 w-full md:flex md:w-auto lg:order-1 md:order-2`}
              id="navbar-sticky2" >
              <ul className="flex flex-col p-4 md:p-0  font-medium  rounded-lg w-full text-center  md:space-x-8 rtl:space-x-reverse  md:flex-row md:mt-0 md:border-0 ">
                <li onClick={toggleMenu2}>
                  <Link to="/" onClick={scrollToTop} className="block py-2 px-3 text-primary-blue-color   rounded md:bg-transparent   md:p-0 hover:text-primary-blue-color border-b hover:bg-gray-100 w-full" aria-current="page" >
                    Home
                  </Link>
                </li>

                <li onClick={toggleMenu2}>
                  <Link
                    to="/aim-nd-scope"
                    onClick={scrollToTop}
                    className="block py-2 px-3 text-primary-blue-color rounded hover:bg-gray-100  md:hover:bg-transparent  md:p-0 hover:text-primary-blue-color border-b"
                  >
                    Aim & Scope
                  </Link>
                </li>

                <li onClick={toggleMenu2}>
                  <Link
                    to="/aboutus"
                    onClick={scrollToTop}
                    className="block py-2 px-3 text-primary-blue-color rounded hover:bg-gray-100  md:hover:bg-transparent  md:p-0 hover:text-primary-blue-color border-b"
                  >
                    About Us
                  </Link>
                </li>
                <li onClick={toggleMenu2}>
                  <Link
                    to="/call-for-papers"
                    onClick={scrollToTop}
                    className="block py-2 px-3 text-primary-blue-color rounded hover:bg-gray-100  md:hover:bg-transparent  md:p-0 hover:text-primary-blue-color border-b"
                  >
                    Call For Paper
                  </Link>
                </li>
                <li onClick={toggleMenu2}>
                  <Link
                    to="/issues"
                    onClick={scrollToTop}
                    className="block py-2 px-3 text-primary-blue-color rounded hover:bg-gray-100  md:hover:bg-transparent  md:p-0 hover:text-primary-blue-color border-b"
                  >
                    Issues
                  </Link>
                </li>
                <li onClick={toggleMenu2}>
                  <Link
                    to="/author-guidelines"
                    onClick={scrollToTop}
                    className="block py-2 px-3 text-primary-blue-color rounded hover:bg-gray-100  md:hover:bg-transparent  md:p-0 hover:text-primary-blue-color border-b "
                  >
                    Author Guideliness
                  </Link>
                </li>
                <li onClick={toggleMenu2}>
                  <Link
                    to="/pay-fees"
                    onClick={scrollToTop}
                    className="block py-2 px-3 text-primary-blue-color rounded hover:bg-gray-100  md:hover:bg-transparent  md:p-0 hover:text-primary-blue-color border-b"
                  >
                    Pay fees
                  </Link>
                </li>
                <li onClick={toggleMenu2}>
                  <Link to="/copyright-form" onClick={scrollToTop}
                    className="block py-2 px-3 text-primary-blue-color rounded hover:bg-gray-100  md:hover:bg-transparent  md:p-0 hover:text-primary-blue-color border-b"
                  >
                    Copyright Form
                  </Link>
                </li>
                <li onClick={toggleMenu2}>
                  <Link to="/editorial-board" onClick={scrollToTop} className="block py-2 px-3 text-primary-blue-color rounded hover:bg-gray-100  md:hover:bg-transparent  md:p-0 hover:text-primary-blue-color border-b"
                  >
                    Editorial Board
                  </Link>
                </li>
                <li onClick={toggleMenu2}>
                  <Link to="/contactus" onClick={scrollToTop} className="block py-2 px-3 text-primary-blue-color rounded hover:bg-gray-100  md:hover:bg-transparent  md:p-0 hover:text-primary-blue-color border-b"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <a className="lg:hidden md:flex text-white bg-primary-blue-color hover:bg-primary-blue-color  font-medium text-sm px-6 py-3 text-center flex items-center justify-center gap-4 "
            href=" #" >
            <h1>Submission Portal</h1>
            <svg className="h-4 w-4 text-white animate-ping" fill="none" viewBox="0 0 24 24" stroke="currentColor"  >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
          </a>
        </nav>
      </header>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden fixed h-screen w-full top-0 left-0 backdrop-blur-sm`}></div>
      <div className={`${isMenuOpen2 ? 'block' : 'hidden'} sm:hidden fixed h-screen w-full top-0 left-0 backdrop-blur-sm`}></div>
    </>
  );
}

export default Header;
