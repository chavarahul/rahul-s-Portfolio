import { della, pacifico, poppin, roboto, vinyl} from '@/app/constants'
import React from 'react'

const Header = () => {
    return (
        <header className='w-full h-[12vh]  flex-center  relative  z-[999]'>
             <div className="w-[90%] relative  h-full flex-bet">
                   <div className="w-[15%]  relative h-full flex text-3xl items-end pl-10">
                    <p className={`plfont`}>portfolio</p>
                   </div>
                   <div className="borders w-[20%] h-full relative"></div>
             </div>
        </header>
    )
}

export default Header
