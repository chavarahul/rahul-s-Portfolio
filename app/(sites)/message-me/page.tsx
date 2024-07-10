'use client'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const Page = () => {
    const effectOne = useRef<HTMLDivElement>(null);
    const effectTwo = useRef<HTMLDivElement>(null);
    const effectTThree = useRef<HTMLButtonElement>(null)
    useEffect(()=>{
        const t1 = gsap.timeline();
        t1.to(effectOne.current,{
            opacity:1,
            translateY:0,
            duration:0.5
        })
        .to(effectTwo.current,{
            opacity:1,
            translateY:0,
            duration:0.5  
        }).to(effectTThree.current,{
            opacity:1,
            translateY:0,
            duration:0.5 ,
            // delay:0.8 
        })
    },[])
    return (
        <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-[35rem] w-full space-y-8 bg-white p-8 rounded-lg">

                <form className="mt-8 space-y-6  p-5 w-full" action="#" method="POST">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className='smoother' ref={effectOne} style={{opacity:0,transform:"translateY(50px)"}}>
                            <label htmlFor="message" className="plfont text-lg">Message</label>
                            <p className="mt-1 text-gray-500 text-lg mb-3">Introduce yourself and share as much you can</p>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                cols={50}
                                className="text-lg mb-5 appearance-none rounded-none relative block w-full px-3 py-2 border  border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Write your message"
                            />
                        </div>
                        <div className="pt-4 smoother" ref={effectTwo}  style={{opacity:0,transform:"translateY(50px)"}}>
                            <label htmlFor="email-address" className="mb-4 plfont text-lg">Email address</label>
                            <p className="mt-1 text-gray-500  plfont text-">Where youll receive the reply</p>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="plfont mt-2 mb-5 text-lg appearance-none  relative block w-full px-5 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-[10px] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="email@domain.com"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            ref={effectTThree}
                            style={{opacity:0,transform:"translateY(50px)"}}
                            className="w-full blacker  smoother text-white text-center py-3 rounded-[20px]"
                        >
                            Send message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Page