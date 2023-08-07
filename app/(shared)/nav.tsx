import React from 'react'
import {MdOutlineDashboardCustomize, MdOutlineMemory} from 'react-icons/md'
import {AiOutlineClockCircle, AiOutlineFolder, AiOutlineNotification, AiOutlineSetting} from 'react-icons/ai'
import {BsBookmarkCheck, BsChevronRight} from 'react-icons/bs'
import {FiHelpCircle} from 'react-icons/fi'
import {BiChevronRight, BiLogOut, BiNotification} from 'react-icons/bi'

type Props = {}

const Nav = (props: Props) => {
  return (
    <nav className=' w-60 p-4 border h-[100vh]'>
        <div className='flex gap-2 items-center'>
            <img src='/rainbow.jpg' className='w-10 h-10 rounded-full' />
            <div>
                <h1 className='text-sm flex gap-2 items-center font-bold'>Avocado <BiChevronRight className='text-2xl'/></h1>
                <p className='text-xs text-slate-500'>ibuemmanuel60@gmail.com</p>
            </div>
        </div>
        <div className='flex mt-10 gap-20 flex-col justify-between'>
            <div className='flex flex-col gap-5 '>
                <div className='flex gap-2 items-center'>
                    <MdOutlineDashboardCustomize />
                    <span className='text-xs font-medium'>Dashboard</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <AiOutlineFolder />
                    <span className='text-xs font-medium'>My files</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <AiOutlineClockCircle />
                    <span className='text-xs font-medium'>Recent</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <BsBookmarkCheck />
                    <span className='text-xs font-medium'>Important</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <AiOutlineNotification />
                    <span className='text-xs font-medium'>Notifications</span>
                </div>
            </div>
            <div className='flex flex-col gap-5 '>
                <div className='flex gap-2 items-center'>
                    <FiHelpCircle />
                    <span className='text-xs font-medium'>Help</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <AiOutlineSetting />
                    <span className='text-xs font-medium'>Settings</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <BiLogOut />
                    <span className='text-xs font-medium'>Log out</span>
                </div>
            </div>
            <div className='flex flex-col gap-5 '>
                <div className='flex gap-2 items-center'>
                    <MdOutlineMemory />
                    <span className='text-xs font-medium'>Memory</span>
                </div>
                <div className='flex gap-2 items-center'>
                    <BiNotification />
                    <span className='text-xs font-medium'>Free trial: <span>29 days left</span></span>
                </div>
            </div>
        </div>    
    </nav>
  )
}

export default Nav