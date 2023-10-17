import React from 'react'
import {MdOutlineDashboardCustomize, MdOutlineMemory} from 'react-icons/md'
import {AiOutlineClockCircle, AiOutlineFolder, AiOutlineNotification, AiOutlineSetting} from 'react-icons/ai'
import {BsBookmarkCheck, BsChevronRight} from 'react-icons/bs'
import {FiHelpCircle} from 'react-icons/fi'
import {BiChevronRight, BiLogOut, BiNotification} from 'react-icons/bi'
import Link from 'next/link'

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav className='hidden md:block md:w-60 p-4 border h-[100vh]'>
        <div className='flex gap-2 items-center'>
            <img src='/rainbow.jpg' className='w-5 h-5 md:w-10 md:h-10 rounded-full' />
            <div className=' hidden md:block'>
                <h1 className='text-sm flex gap-2 items-center font-bold'>Avocado <BiChevronRight className='text-2xl'/></h1>
                <p className='text-[10px] text-slate-500'>ibuemmanuel60@gmail.com</p>
            </div>
        </div>
        <div className='flex mt-10 gap-20 flex-col justify-between'>
            <div className='flex flex-col gap-5 '>
                <div className='flex gap-2 items-center'>
                    <MdOutlineDashboardCustomize />
                    <Link href='/public'><span className='text-xs hidden md:block font-medium'>Public</span></Link>
                </div>
                <div className='flex gap-2 items-center'>
                    <AiOutlineFolder />
                    <Link href='/my-file'><span className='text-xs hidden md:block font-medium'>My files</span></Link>
                </div>
                <div className='flex gap-2 items-center'>
                    <AiOutlineClockCircle />
                    <span className='text-xs hidden md:block font-medium'>Recent</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <BsBookmarkCheck />
                    <span className='text-xs hidden md:block font-medium'>Important</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <AiOutlineNotification />
                    <span className='text-xs hidden md:block font-medium'>Notifications</span>
                </div>
            </div>
            <div className='flex flex-col gap-5 '>
                <div className='flex gap-2 items-center'>
                    <FiHelpCircle />
                    <Link href='/help'><span className='text-xs hidden md:block font-medium'>Help</span></Link>
                </div>
                <div className='flex gap-2 items-center'>
                    <AiOutlineSetting />
                    <span className='text-xs hidden md:block font-medium'>Settings</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <BiLogOut />
                    <span className='text-xs hidden md:block font-medium'>Log out</span>
                </div>
            </div>
            <div className='flex flex-col gap-5 '>
                <div className='flex gap-2 items-center'>
                    <MdOutlineMemory />
                    <span className='text-xs hidden md:block font-medium'>Memory</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <BiNotification />
                    <Link href='/pricing'><span className='text-xs hidden md:block font-medium'>Free trial: <span>29 days left</span></span></Link>
                </div>
            </div>
        </div>    
    </nav>
  )
}

export default Nav