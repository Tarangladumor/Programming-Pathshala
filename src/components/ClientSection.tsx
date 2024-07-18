import Image from "next/image"
import ICON1 from '../assests/Icon1.png'
import ICON2 from '../assests/Icon2.png'
import ICON3 from '../assests/Icon3.png'
import ICON4 from '../assests/Icon4.png'
import ICON5 from '../assests/Icon5.png'
import ICON6 from '../assests/Icon6.png'
import Headers from "./common/Headers"
import modeStore from "@/store/modeStore"


const ClientSection = () => {

    const {mode} = modeStore((state) => ({mode:state.mode}));
    
    return (
        <div className={`py-10 ${mode === 'dark' ? "bg-black" : "bg-white"}`}>

            <Headers heading="Our Clients" para="We have been working with some Fortune 500+ clients"/>

            <section className="flex justify-center items-center flex-wrap gap-20 py-10">

                <Image src={ICON1} alt="icon" />
                <Image src={ICON2} alt="icon" />
                <Image src={ICON3} alt="icon" />
                <Image src={ICON4} alt="icon" />
                <Image src={ICON5} alt="icon" />
                <Image src={ICON6} alt="icon" />
                <Image src={ICON1} alt="icon" />

            </section>

        </div>
    )
}

export default ClientSection
