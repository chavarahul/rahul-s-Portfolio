import React from 'react'
import Link from 'next/link'
import { FaBehance, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { AiOutlineCopyright } from 'react-icons/ai'
import { poppin } from '@/app/constants'

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-evenly items-center p-8 blacker min-h-[30vh] max-h-[40vh] text-white">
      <div className="w-full sm:w-1/3 flex justify-center sm:justify-start mb-4 sm:mb-0 mt-20 max-md:mt-7">
        <h1 className={`text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem]`}>Rahul</h1>
      </div>
      <div className="w-full sm:w-1/6 flex justify-center items-evenly mb-4 sm:mb-0">
        <ul className="flex flex-col items-center sm:items-start space-y-2">
          <li><Link href="/works" className={`${poppin.className}`}>About me</Link></li>
          <li><Link href="/services" className={`${poppin.className}`}>Services</Link></li>
          <li><Link href="/plans" className={`${poppin.className}`}>Projects</Link></li>
          <li><Link href="/contacts" className={`${poppin.className}`}>Contacts</Link></li>
        </ul>
      </div>
      <div className="w-full sm:w-1/4 flex flex-col justify-evenly items-center h-auto sm:h-[10rem]">
        <p className="text-center sm:text-left">Follow me for more updates</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <Link href="https://www.circuloid.com" target="_blank"><AiOutlineCopyright className="text-2xl" /></Link>
          <Link href="https://www.behance.net" target="_blank"><FaBehance className="text-2xl" /></Link>
          <Link href="https://www.linkedin.com" target="_blank"><FaLinkedin className="text-2xl" /></Link>
          <Link href="https://www.instagram.com" target="_blank"><FaInstagram className="text-2xl" /></Link>
        </div>
      </div>
      <div className="w-full text-center mt-4 sm:mt-0">
      </div>
    </footer>
  )
}

export default Footer
