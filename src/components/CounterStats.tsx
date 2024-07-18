import React from 'react';
import CARD from '../assests/Card_img.png'
import GROUP from '../assests/Group_2_img.png'
import MEMBER from '../assests/Member_img.png'
import VECTOR from '../assests/Vector_img.png'

import Counter from './Counter';
import Image from 'next/image';
import HighlightText from './common/HighlightText';
import modeStore from '@/store/modeStore';

const CounterStats: React.FC = () => {

    const {mode} = modeStore((state) => ({mode:state.mode}));

    return (
        <div className={`p-4 ${mode === 'dark' ? 'bg-[#1A202C]' : 'bg-[#F5F7FA]'} shadow-md flex flex-col gap-y-10 lg:flex-row justify-center items-center py-10 my-10`}>
            <div className='flex flex-col gap-4'>
                <h2 className={`${mode === 'dark' ? 'text-[#E5E7EB]' : 'text-[#4D4D4D]'} text-4xl font-semibold lg:w-[60%] lg:text-left lg:m-0 text-center md:w-[60%] md:mx-auto`}>
                    Helping a local <HighlightText text='business reinvent itself' />
                </h2>
                <p className={`text-base font-normal text-center lg:text-left ${mode === 'dark' ? 'text-white' : 'text-black'}`}>We reached here with our hard work and dedication</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-4">
                <div className="flex flex-col">
                    <div className='flex gap-2'>
                        <Image src={MEMBER} alt='member_img' className='w-10 h-10' />
                        <Counter end={2245341} />
                    </div>
                    <div className={`text-sm ${mode === 'dark' ? 'text-[#E5E7EB]' : 'text-[#4D4D4D]' } text-center`}>Members</div>
                </div>

                <div className="flex flex-col">
                    <div className='flex gap-2'>
                        <Image src={GROUP} alt='group_img' className='w-10 h-10' />
                        <Counter end={46328} />
                    </div>
                    <div className={`text-sm ${mode === 'dark' ? 'text-[#E5E7EB]' : 'text-[#4D4D4D]' } text-center`}>Clubs</div>
                </div>

                <div className="flex flex-col">
                    <div className='flex gap-2'>
                        <Image src={VECTOR} alt='vector_img' className='w-10 h-10' />
                        <Counter end={828867} />
                    </div>
                    <div className={`text-sm ${mode === 'dark' ? 'text-[#E5E7EB]' : 'text-[#4D4D4D]' } text-center`}>Event Bookings</div>
                </div>

                <div className="flex flex-col">
                    <div className='flex gap-2'>
                        <Image src={CARD} alt='card_img' className='w-10 h-10' />
                        <Counter end={1926436} />
                    </div>
                    <div className={`text-sm ${mode === 'dark' ? 'text-[#E5E7EB]' : 'text-[#4D4D4D]' } text-center`}>Payments</div>
                </div>
            </div>

        </div>
    );
};

export default CounterStats;