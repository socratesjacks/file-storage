import React from 'react'
import { AiFillInstagram, AiOutlineBehance, AiOutlineFacebook, AiOutlineInstagram, AiOutlineMessage, AiOutlinePhone, AiOutlineTwitter } from 'react-icons/ai'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='flex flex-col gap-5 mb-10'>
        <div>
            <h1 className='text-xl font-black'>Let's get in touch!</h1>
            <p className='text-xs'>Got questions about the PerfectStore? Our team is here to help. Contact us for quick and friendly support.</p>    
        </div>
        <div className='flex md:flex-row flex-col md:items-center gap-10 md:gap-16'>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <p className='text-xs flex items-center gap-1'><AiOutlinePhone />+012 345 6789</p>
                    <p className='text-xs flex items-center gap-1'><AiOutlineMessage />test@gmail.com</p>
                </div>
                <div className='flex gap-1 flex-col'>
                    <p className='text-xs font-semibold'>Connect with us</p>
                    <div className='flex gap-2'>
                        <span className='text-xs'><AiOutlineInstagram /></span>
                        <span className='text-xs'><AiOutlineFacebook /></span>
                        <span className='text-xs'><AiOutlineBehance /></span>
                        <span className='text-xs'><AiOutlineTwitter /></span>
                    </div>
                </div>
            </div>
            <div className='flex gap-2 flex-col'>
                <div>
                    <span></span>
                    <input type='text' placeholder='Full Name' className=' w-64 p-2 border rounded-md text-xs' />
                </div>
                <div>
                    <span></span>
                    <input type='email' placeholder='Email' className=' w-64 text-xs p-2 border rounded-md' />
                </div>
                <button className='text-xs w-36 py-2 rounded-md bg-[#186ade] text-white'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Contact