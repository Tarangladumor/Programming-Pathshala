import React from 'react';
import CARD from '../assests/Card_img.png'
import GROUP from '../assests/Group_2_img.png'
import MEMBER from '../assests/Member_img.png'
import VECTOR from '../assests/Vector_img.png'

import Counter from './Counter';
import Image from 'next/image';
import HighlightText from './common/HighlightText';

const CounterStats: React.FC = () => {
    return (
        <div className="p-4 bg-[#F5F7FA] shadow-md flex justify-center flex-wrap items-center py-10 my-10">
            <div className='flex flex-col gap-4'>
                <h2 className="text-[#4D4D4D] text-4xl font-semibold w-[60%]">
                    Helping a local <HighlightText text='business reinvent itself'/>
                </h2>
                <p className="text-base font-normal">We reached here with our hard work and dedication</p>
            </div>

            <div className="grid grid-cols-2 gap-x-20 gap-y-4">
                <div className="flex flex-col">
                    <div className='flex gap-2'>
                        <Image src={MEMBER} alt='member_img' className='w-10 h-10'/>
                        <Counter end={2245341} />
                    </div>

                    <div className="text-sm text-gray-500 text-center">Members</div>
                </div>
                <div className="flex flex-col">
                    <div className='flex gap-2'>
                        <Image src={GROUP} alt='group_img' className='w-10 h-10' />
                        <Counter end={46328} />
                    </div>

                    <div className="text-sm text-gray-500 text-center">Clubs</div>
                </div>
                <div className="flex flex-col">
                    <div className='flex gap-2'>
                        <Image src={VECTOR} alt='vector_img' className='w-10 h-10'/>
                        <Counter end={828867} />
                    </div>

                    <div className="text-sm text-gray-500 text-center">Event Bookings</div>
                </div>
                <div className="flex flex-col">
                    <div className='flex gap-2'>
                        <Image src={CARD} alt='card_img' className='w-10 h-10'/>
                        <Counter end={1926436} />
                    </div>
                    <div className="text-sm text-gray-500 text-center">Payments</div>
                </div>
            </div>
        </div>
    );
};

export default CounterStats;