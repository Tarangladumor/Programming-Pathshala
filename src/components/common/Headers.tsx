import modeStore from '@/store/modeStore'
import React from 'react'

interface HeadersProps {
    heading: string,
    para: string
}

const Headers: React.FC<HeadersProps> = ({
    heading,
    para
}) => {

    const { mode } = modeStore((state) => ({ mode: state.mode }))

    return (
        // <header className="flex flex-col justify-center items-center gap-2">
        //     <h2 className={`font-semibold text-4xl w-[35%] text-center ${mode === 'dark' ? "text-white" : "text-[#4D4D4D]"}`}>{heading}</h2>

        //     <p className={`font-normal text-base w-[50%] text-center ${mode === 'dark' ? 'text-[#E0E0E0]' : 'text-[#717171]'}`}>{para}</p>
        // </header>

        <header className="my-8 flex flex-col items-center w-full">
            <h2 className={`text-2xl md:text-3xl lg:text-4xl w-full lg:w-1/3 font-semibold text-center ${mode === 'dark' ? "text-white" : "text-[#4D4D4D]"}`}>{heading}</h2>
            <p className={`text-base md:text-sm lg:text-lg mt-4 w-full lg:w-1/2 text-center font-normal ${mode === 'dark' ? 'text-[#E0E0E0]' : 'text-[#717171]'}`}>{para}</p>
        </header>
    )
}

export default Headers