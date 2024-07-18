'use client'

import All_CustomerSection from "@/components/All_CustomerSection";
import CarouselSection from "@/components/CarouselSection";
import ClientSection from "@/components/ClientSection";
import LearnSection from "@/components/common/LearnSection";
import CommunitySection from "@/components/CommunitySection";
import CounterStats from "@/components/CounterStats";
import LastSection from "@/components/LastSection";
import MarketingSection from "@/components/MarketingSection";
import LOGIN from '../assests/Login_img.png'
import MOBILE from '../assests/mobile_img.png'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/common/DarkModeToggle";
import modeStore from "@/store/modeStore";

export default function Home() {

  const {mode} = modeStore((state) => ({mode:state.mode}));

  return (
    <div className={`${mode === "dark" ? "bg-black" : "bg-white"}`}>
      <Navbar/>

    
        <CarouselSection/>

        <ClientSection/>

        <CommunitySection/>

        <LearnSection image={LOGIN} heading="The unseen of spending three years at Pixelgrade"
        Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio." button="Learn More"/>

        <CounterStats/>


        <LearnSection image={MOBILE} heading="How to design your site footer like we did"
        Text="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida." button="Learn More"/>

        <All_CustomerSection/>

        <MarketingSection/>

        <LastSection/>

        <Footer/>
    </div>
  );
}
