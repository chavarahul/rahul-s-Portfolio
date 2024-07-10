'use client'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useRouter } from 'next/navigation';

const Contact = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const box = boxRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (box) {
        const rect = box.getBoundingClientRect();
        const boxX = rect.left + rect.width / 2;
        const boxY = rect.top + rect.height / 2;
        const offsetX = (e.clientX - boxX) / rect.width;
        const offsetY = (e.clientY - boxY) / rect.height;

        gsap.to(box, {
          x: -offsetX * 50,
          y: -offsetY * 50,
          ease: 'power3.out',
          duration: 0.5
        });
      }
    };

    const handleMouseLeave = () => {
      if (box) {
        gsap.to(box, {
          x: 0,
          y: 0,
          ease: 'power3.out',
          duration: 0.5
        });
      }
    };

    if (box) {
      box.addEventListener('mousemove', handleMouseMove);
      box.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (box) {
        box.removeEventListener('mousemove', handleMouseMove);
        box.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className='border-none min-h-[90vh] w-full relative  flex items-center justify-center'>
      <p className='text-gray-200 font-bold absolute lowercase text-[13rem] sm:text-[19rem] md:text-[19rem] lg:text-[20rem] xl:text-[25rem] 2xl:text-[30rem]'>
        hello
      </p>
      <div ref={boxRef} onClick={()=>{router.push('/message-me')}} className="cursor-pointer relative max-h-[14rem] min-h-[13rem] flex items-center justify-center rounded-[100px]  w-[60%] sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white">
        <p className='plfont text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem] font-bold text-gray-800'>
          Say hi
        </p>
      </div>
    </section>
  )
}

export default Contact
