import React from 'react'

interface HeadersProps {
    heading: string,
    para: string
}

const Headers: React.FC<HeadersProps> = ({
    heading,
    para
}) => {
    return (
        <header className="flex flex-col justify-center items-center gap-2">
            <h2 className="font-semibold text-4xl text-[#4D4D4D] w-[35%] text-center">{heading}</h2>

            <p className="font-normal text-base text-[#717171] w-[50%] text-center">{para}</p>
        </header>
    )
}

export default Headers
