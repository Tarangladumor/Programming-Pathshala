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
        <header className="flex flex-col justify-center items-center gap-2">
            <h2 className={`font-semibold text-4xl w-[35%] text-center ${mode === 'dark' ? "text-white" : "text-[#4D4D4D]"}`}>{heading}</h2>

            <p className={`font-normal text-base w-[50%] text-center ${mode === 'dark' ? 'text-[#E0E0E0]' : 'text-[#717171]'}`}>{para}</p>
        </header>
    )
}

export default Headers