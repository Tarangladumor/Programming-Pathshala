'use client'

import * as React from "react"
import SLIDE1 from '../assests/Carousel_IMG.png'
import SLIDE2 from '../assests/Caresoul_img2.jpg'
import SLIDE3 from '../assests/Caresoul_img3.jpg'

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button"
import Image from "next/image"
import HighlightText from "./common/HighlightText"
import modeStore from "@/store/modeStore"


const CarouselSection = () => {
    const {mode} = modeStore((state) => ({mode: state.mode }))
    return (
        <div className="w-full mx-auto mt-1">
            <Carousel>
                <CarouselContent >
                    <CarouselItem className={`${mode === 'dark' ? "bg-[#1A202C]" : "bg-[#F5F7FA]"}`}>
                        <div className="flex flex-col lg:flex-row justify-center items-center p-8 lg:p-32 gap-8 h-[400px] lg:h-[500px] mt-20">
                            <div className="flex text-center lg:text-left">
                                <div className="flex flex-col gap-4">
                                    <h1 className={`font-semibold text-2xl lg:text-6xl ${mode === 'dark' ? 'text-[#E5E7EB]' : 'text-[#4D4D4D]'} max-w-full lg:max-w-[75%]`}>
                                        Lessons and insights <HighlightText text="from 8 years" />
                                    </h1>
                                    <p className="text-[#717171] text-base font-normal">
                                        Where to grow your business as a photographer: site or social media?
                                    </p>
                                    <Button className="w-fit text-base mx-auto lg:mx-0">Register</Button>
                                </div>
                            </div>
                            <div className="flex max-h-[250px] lg:max-h-[350px]">
                                <Image src={SLIDE1} alt="Carousel_image"  className="object-contain max-h-full"/>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className={`${mode === 'dark' ? "bg-[#1A202C]" : "bg-[#F5F7FA]"}`}>
                        <div className="flex flex-col lg:flex-row justify-center items-center p-8 lg:p-32 gap-8">
                            <div className="flex-1 text-center lg:text-left">
                                <div className="flex flex-col gap-4">
                                    <h1 className={`font-semibold text-2xl lg:text-6xl ${mode === 'dark' ? 'text-[#E5E7EB]' : 'text-[#4D4D4D]'} max-w-full lg:max-w-[75%]`}>
                                        Reflections from a journey spanning <HighlightText text="eight years." />
                                    </h1>
                                    <p className="text-[#717171] text-base font-normal">
                                        Where to grow your business as a photographer: site or social media?
                                    </p>
                                    <Button className="w-fit text-base mx-auto lg:mx-0">Register</Button>
                                </div>
                            </div>
                            <div className="flex-1 max-h-[250px] lg:max-h-[350px]">
                                <Image src={SLIDE2} alt="Carousel_image"  className="object-contain max-h-full" />
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem className={`${mode === 'dark' ? "bg-[#1A202C]" : "bg-[#F5F7FA]"}`}>
                        <div className="flex flex-col lg:flex-row justify-center items-center p-8 lg:p-32 gap-8 lg:gap-0">
                            <div className="flex-1 text-center lg:text-left">
                                <div className="flex flex-col gap-4">
                                    <h1 className={`font-semibold text-2xl lg:text-6xl ${mode === 'dark' ? 'text-[#E5E7EB]' : 'text-[#4D4D4D]'} max-w-full lg:max-w-[75%]`}>
                                        Wisdom gained through a <HighlightText text="decade of experience" />
                                    </h1>
                                    <p className="text-[#717171] text-base font-normal">
                                        Where to grow your business as a photographer: site or social media?
                                    </p>
                                    <Button className="w-fit text-base mx-auto lg:mx-0">Register</Button>
                                </div>
                            </div>
                            <div className="flex-1 max-h-[250px] lg:max-h-[350px]">
                                <Image src={SLIDE3} alt="Carousel_image"  className="object-contain max-h-full" />
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
                <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
            </Carousel>
        </div>
    )
}

export default CarouselSection
