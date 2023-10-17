"use client"
import React from 'react'
import { AiOutlineGoogle } from 'react-icons/ai'

type Props = {}

const Page = (props: Props) => {
  return (
    <section className='flex flex-col justify-center h-[90vh] items-center'>
        <div className='flex items-center gap-5 flex-col'>
            <h1 className='text-2xl font-black'>Welcome</h1>
            <div className='flex gap-2 flex-col'>
                <button className='w-64 h-10 text-white bg-[#186ade] rounded-md border py-2 text-xs px-1'>Log in</button>
                <button className='w-64 border-[#186ade] text-[#186ade] h-10 flex items-center justify-center gap-1 rounded-md border py-2 text-xs px-1'><AiOutlineGoogle  className='text-lg'/>Log in with Google</button>
            </div>
        </div>
        <p>or</p>
        <div className='flex flex-col items-center gap-2'>
            <div className='flex flex-col gap-1'>
                <p className='font-bold text-xs'>Email</p>
                <input type='email' className='border-2 rounded-md py-2 outline-none px-1 text-xs w-64 h-10' placeholder='company@email.com' />
            </div>
            <div className='flex flex-col gap-1'>
                <p className='font-bold text-xs'>Password</p>
                <input type='password' className='border-2 rounded-md py-2 px-1 outline-none text-xs w-64 h-10' placeholder='*************' />
            </div>
            <p className='text-[#186ade] mt-3 underline text-xs'>Forgot your password?</p>
        </div>
    </section>
  )
}

export default Page