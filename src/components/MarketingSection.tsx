import Image from "next/image"
import { Button } from "./ui/button"
import { GoArrowRight } from "react-icons/go";
import IMG1 from '../assests/Marketing_img1.png'
import IMG2 from '../assests/Marketing_img2.png'
import IMG3 from '../assests/Marketing_img3.png'
import Headers from "./common/Headers";
import MarketingCard from "./common/MarketingCard";

const MarketingSection = () => {
    return (
        <div className=" w-10/12 mx-auto my-12">

            <Headers heading="Caring is the new marketing" para="The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more." />

            <section className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center gap-8 lg:gap-4 w-11/12 mx-auto py-8">
                <MarketingCard image={IMG1} Text="Creating Streamlined Safeguarding Processes with OneRen" button="Read more" />


                <MarketingCard image={IMG2} Text="What are your safeguarding responsibilities and how can you manage them?" button="Read more" />


                <MarketingCard image={IMG3} Text="Revamping the Membership Model with Triathlon Australia" button="Read more" />
            </section>

        </div>
    )
}

export default MarketingSection
