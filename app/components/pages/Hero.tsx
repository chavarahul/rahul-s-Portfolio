'use client'
import React, { useEffect, useRef } from 'react'
import down from '@/public/images/down.png'
import Image from 'next/image'
import gsap from 'gsap'

const Hero = () => {
    const pTag1Ref = useRef<HTMLParagraphElement>(null)
    const pTag2Ref = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        if (pTag1Ref.current && pTag2Ref.current) {
            const t1 = gsap.timeline();
            t1.to('.ll',  {
                translateY: 0,
                duration: 1,
                // ease: 'power1.inOut'
            }).to(pTag2Ref.current, {
                translateY: 0,
                duration: 1,
                // ease: 'power1.inOut'
            })
        }
    }, [])

    return (
        <section className='h-[90vh] flex-bet flex-col whiter Scroller border-none'>
            <div className="w-full relative h-[80%] flex items-end">
                <div className="h-[75%] w-full relative flex-colm mb-10">
                    <div className="h-[15%] w-full flex-center">
                        <div className="border border-[#ff661a] rounded-[35px] px-20 py-2">
                            <p className='plfont font-semibold'>I{"'"}m Rahul</p>
                        </div>
                    </div>
                    <div className="h-[80%] w-full relative flex-colm text-[7rem] overflow-hidden">
                        <div className="overflow-hidden">
                        <p ref={pTag1Ref} style={{transform:'translateY(150px)'}} className='plfont ll overflow-hidden smoother'>Crafts Code</p>
                        </div>
                        <p ref={pTag2Ref} style={{transform:'translateY(150px)'}} className='plfont overflow-hidden smoother'>Building <span className='text-[#ff661a]'>Stunning Sites</span></p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[20%]">
                <Image src={down} alt='Images' />
            </div>
        </section>
    )
}

export default Hero
