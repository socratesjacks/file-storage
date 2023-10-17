
import Title from '@components/my-file/Title'
import Link from 'next/link'
import React from 'react'
import { AiOutlinePlus, AiOutlineShareAlt } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'

type Props = {}

const Page = (props: Props) => {
  return (
    <section className='px-4 md:p-10 mb-10 flex flex-col gap-7'>
        <div className='w-100%'>
            <h1 className='text-2xl font-black mt-5 mb-7'>Public files</h1>
            <div className='text-xs flex flex-col md:flex-row gap-3 justify-between items-center'>
                <div className='relative'>
                    <input type='text' className='border-2 text-slate-500 px-8 h-10 rounded-md' placeholder='Search' />
                    <FiSearch className='absolute text-base text-slate-500 top-3 left-2' />
                </div>
                {/* <div className='flex gap-3'>
                    <button className='text-xs tracking-wide text-[#186ade] font-semibold px-4 py-2 border rounded-md border-[#186ade] flex items-center gap-1'><AiOutlinePlus className='text-base' /> Add files</button>
                    <Link href='/share'><button className='text-xs tracking-wide rounded-md px-4 font-semibold py-2 bg-[#186ade] text-white flex items-center gap-1'><AiOutlineShareAlt className='text-base' /> Share</button></Link>
                </div> */}
            </div>
        </div>
        <Title />
    </section>
  )
}

export default Page