import React from 'react';
import { FaEnvelope, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-primary-blue-color text-white">
      <div className=" mx-auto px-5 max-w-[92rem] py-5">
        <div className="grid grid-cols-1  xl:grid-cols-4 md:grid-cols-3 md:gap-8 gap-4">
          <div className='text-center md:text-left'>
            <Link to='/'>
              <div className='p-3 bg-white w-fit mb-5 rounded-md md:mx-0 mx-auto' >
                <img className='w-40' src="/images/Logo.png" alt="" />
              </div>
            </Link>
            <div className='flex flex-col justify-center md:items-start items-center md:text-left'>
              <div className='flex gap-3 items-center'>
                <FaEnvelope />
                <p>Email: <a href="mailto:editor@AJARCSE.com" className=" ">editorajarcse@gmail.com</a></p>
              </div>
              <div className='flex gap-3 items-center'>
                <FaGlobe />
                <p>Website: <a href="https://www.AJARCSE.com" className=" ">www.ajarcse.com</a></p>
              </div>
            </div>
          </div>
          <div className='lg:mx-auto md:text-left text-center '>
            <h4 className="text-xl font-bold mb-2">Resources</h4>
            <ul>
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/aboutus" className="hover:underline">About Us</a></li>
              <li><a href="/contactus" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div className='lg:ml-auto  md:text-left text-center  '>
            <div className='flex gap-4 flex-wrap justify-center items-end '>
              <div className=''>
                <h4 className="text-xl font-bold mb-2">Journal Overview</h4>
                <ul className=" ">
                  <li><a href="/editorial-board" className="hover:underline">Editorial Board</a></li>
                  <li><a href="/peerreview" className="hover:underline">Peer Review Process</a></li>
                  <li><a href="/publicationethic" className="hover:underline">Publication Ethics</a></li>
                  <li><a href="/abstracting" className="hover:underline">Abstracting and Indexing</a></li>
                  <li><a href="/articleProcess" className="hover:underline">Article Processing Charges</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className=' place-content-end xl:block hidden'>
            <img className='md:ml-auto md:mx-0 mx-auto w-24 ' src="/assets/logo/ojs_brand.png" alt="ojs" />
          </div>
        </div>
      </div>
      <h1 className="bg-slate-300 h-[1px] max-w-[92rem] mx-auto  "></h1>
      <div className='grid lg:grid-cols-3 grid-cols-1  items-center  gap-2  py-5'>
        <div>
        </div>
        <div className="text-center    ">
          <p>© 2025 <span className='hover:underline' > <Link to="/" target='_blank'>AJARCSE</Link> </span> . All Rights Reserved.</p>
        </div>
        <div className=' '>
          <img className='md:ml-auto md:mx-0 mx-auto w-24 xl:hidden block' src="/assets/logo/ojs_brand.png" alt="ojs" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
