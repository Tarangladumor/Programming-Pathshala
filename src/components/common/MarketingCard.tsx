import Image from "next/image"
import { Button } from "../ui/button"
import { GoArrowRight } from "react-icons/go"

interface MarketingCardProps {
    image: any,
    Text: string,
    button: string
}

const MarketingCard: React.FC<MarketingCardProps> = ({
    image, Text, button
}) => {
    return (
        <div className="relative w-full sm:w-3/4 md:w-1/2 lg:w-1/3 flex justify-center mb-16 lg:mb-0">
            <Image src={image} alt="Marketing_img" className="w-full h-auto max-w-md" />
            <div className="absolute bg-[#F5F7FA] shadow-lg w-[85%] bottom-[-3rem] left-1/2 transform -translate-x-1/2 text-center rounded-md py-5 flex flex-col gap-3">
                <p className="text-[#717171] text-sm sm:text-base md:text-lg lg:text-xl font-semibold px-4 md:px-8">{Text}</p>
                <Button variant={'link'} className="text-sm sm:text-base md:text-lg lg:text-xl">
                    {button}
                    <GoArrowRight size={20} />
                </Button>
            </div>
        </div>
    )
}

export default MarketingCard
