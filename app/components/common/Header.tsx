'use client'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
  const path = usePathname();
  const router = useRouter();
  return (
    // <div className=""></div>
    <header className='w-full h-[12vh]  flex items-center justify-end relative '>
     <div className={`w-[95%] max-xl:w-full relative  h-full flex-bet ${path === '/message-me' ? 'bg-white':' whiter'}`}>
        <div className="w-[15%]  relative h-full flex text-4xl items-end pl-10">
          <p className={`plfont capitalize pb-1 cursor-pointer`} onClick={()=>{router.push('/')}}>portfolio</p>
        </div>
        <div className=" w-[20%] h-full relative flex justify-center items-end pb-1">
          <button className='buttonp '><span className="text">Contact me</span><span>Thanks!</span></button>
        </div>
      </div>
    </header>
  )
}

export default Header
