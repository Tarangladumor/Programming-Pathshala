import Image from "next/image"
import { Button } from "../ui/button"

interface LastSectionProps {
    image : any,
    heading : string,
    Text : string,
    button : string
}

const LearnSection: React.FC<LastSectionProps> = ({
    image,heading,Text,button
}) => {
    return (
        <div className="w-11/12 mx-auto my-16">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">

                <div className="w-full lg:w-1/4 md:w-1/2 flex justify-center">
                    <Image src={image} alt="image" className="w-full h-auto max-w-[500px]" />
                </div>

                <section className="flex flex-col gap-5 w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-[#4D4D4D] text-2xl md:text-4xl font-semibold max-w-full md:max-w-[60%] mx-auto md:mx-0">{heading}</h2>
                    <p className="text-sm font-normal text-[#717171] px-4 md:px-0">{Text}</p>

                    <Button className="w-fit text-base mx-auto md:mx-0">{button}</Button>
                </section>

            </div>
        </div>
    )
}

export default LearnSection
