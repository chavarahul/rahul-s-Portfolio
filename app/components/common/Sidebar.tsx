'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { poppin } from '@/app/constants'
import gsap from 'gsap'

const Sidebar = () => {
    const [nav, setNav] = useState<boolean>(false)
    const sidebarRef = useRef<HTMLDivElement>(null)
    const navContentRef = useRef<HTMLDivElement>(null)
    const iconRef = useRef<HTMLDivElement>(null)

    const smoothSlide = () => {
        setNav(!nav)
    }

    useEffect(() => {
        if (nav) {
            gsap.to(sidebarRef.current, { width: '21%', duration: 0.3, ease: 'power4.inOut' })
            gsap.to(navContentRef.current, { display: 'flex', opacity: 1, duration: 0.2, ease: 'power4.inOut', delay: 0.6 })
            gsap.to(iconRef.current, { width: '23%', ease: 'power1.inOut', delay: 0.1 })
        } else {
            gsap.to(navContentRef.current, { display: 'none', opacity: 0, duration: 0.2, ease: 'power4.inOut' })
            gsap.to(sidebarRef.current, { width: '5%', duration: 0.02, ease: 'power4.inOut' })
            gsap.to(iconRef.current, { width: '100%', duration: 0.02, ease: 'power3.inOut', delay: 1.1 })
        }
    }, [nav])

    return (
        <aside ref={sidebarRef} className={` overflow-hidden flex h-screen fixed top-0 left-0 rounded-tr-[15px] rounded-br-[15px] ${nav ? 'whiter' : 'blacker'} trans`} style={{ width: '5%' }}>
            <div ref={iconRef} className={` h-full relative flex-center rounded-tr-[15px] rounded-br-[15px]`}>
                <div className="containerHam flex-center fixed left-4">
                    <input className="label-check" onClick={smoothSlide} id="label-check" type="checkbox" />
                    <label htmlFor="label-check" className="hamburger-label">
                        <div className={`line1 ${nav ? 'bg-black' : 'bg-white'} trans`} />
                        <div className={`line2 ${nav ? 'bg-black' : 'bg-white'} trans`} />
                        <div className={`line3 ${nav ? 'bg-black' : 'bg-white'} trans`} />
                    </label>
                </div>
            </div>
            <div ref={navContentRef} className={`justify-center items-end w-[100%] h-full relative ${nav ? 'flex' : 'hidden'}`} style={{ opacity: 0 }}>
                <div className="absolute left-4 top-12 border h-[90%] border-gray-300"></div>
                <div className="w-full h-[80%] flex-bet flex-col">
                    <nav className={`${poppin.className} flex-col flex justify-evenly pl-16 items-start w-full h-[45%] mt-20`}>
                        <Link className={`${poppin.className}`} href="/">Home</Link>
                        <Link className={`${poppin.className}`} href="/portfolio">Portfolio</Link>
                        <Link className={`${poppin.className}`} href="/about">About me</Link>
                    </nav>
                    <div className="w-full flex-all h-[10%] mb-10">
                        {/* Additional content */}
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
