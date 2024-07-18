import COMMUNITY from '../assests/Community_icon.png'
import CITY from '../assests/CIty_icon.png'
import GROUP from '../assests/Group_icon.png'
import Image from 'next/image'
import Headers from './common/Headers'
import modeStore from '@/store/modeStore'

const CommunitySection = () => {
    const {mode} = modeStore((state) => ({ mode: state.mode }))
    return (
        <div className='py-10'>

            <Headers heading='Manage your entire community in a single system' para='Who is Nextcent suitable for?'/>

            <section className='flex justify-center gap-32 items-center text-center py-10 flex-wrap'>
                <div className='flex flex-col justify-center items-center gap-2 max-w-[230px]'>
                    <Image src={COMMUNITY} alt='community_icon' />
                    <h2 className={`${mode === 'dark' ? 'text-[#E5E7EB]' : 'text-[#4D4D4D]'} text-[28px] font-bold`}>Membership Organisations</h2>
                    <p className={`${mode === 'dark' ? 'text-[#E0E0E0]' : 'text-[#717171]'} text-sm font-normal`}>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 max-w-[230px]'>
                    <Image src={CITY} alt='city_icon' />
                    <h2 className={`${mode === 'dark' ? 'text-[#E5E7EB]' : 'text-[#4D4D4D]'} text-[28px] font-bold`}>National Associations</h2>
                    <p className={`${mode === 'dark' ? 'text-[#E0E0E0]' : 'text-[#717171]'} text-sm font-normal`}>Our membership management software provides full automation of membership renewals and payments</p>
                </div>  
                <div className='flex flex-col justify-center items-center gap-2 max-w-[230px]'>
                    <Image src={GROUP} alt='group_icon' />
                    <h2 className={`${mode === 'dark' ? 'text-[#E5E7EB]' : 'text-[#4D4D4D]'} text-[28px] font-bold`}>Clubs And Groups</h2>
                    <p className={`${mode === 'dark' ? 'text-[#E0E0E0]' : 'text-[#717171]'} text-sm font-normal`}>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </section>

        </div>
    )
}

export default CommunitySection
