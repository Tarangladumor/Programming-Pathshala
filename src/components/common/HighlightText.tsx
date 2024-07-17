import React from 'react'

interface HighlightTextProps {
    text : string
}

const HighlightText: React.FC<HighlightTextProps> = ({text}) => {
    return (
        <span className=" text-[#4CAF4F]">
            {" "}
            {text}
        </span>
    )
}

export default HighlightText

