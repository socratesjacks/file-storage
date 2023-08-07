
import Title from '@components/my-file/Title'
import React from 'react'
import { FiSearch } from 'react-icons/fi'

type Props = {}

const Page = (props: Props) => {
  return (
    <section>
        <div className='w-100%'>
            <h1 className='text-2xl font-black'>My files</h1>
            <div className='text-xs flex gap-3 justify-between items-center'>
                <div className='relative'>
                    <input type='text' className='border-2 text-slate-500 px-8 h-10 rounded-md' placeholder='Search' />
                    <FiSearch className='absolute text-base text-slate-500 top-3 left-2' />
                </div>
                <div className='flex gap-3'>
                    <button className='text-xs tracking-wide text-[#186ade] font-semibold px-4 py-2 border rounded-md border-[#186ade]'>Add files</button>
                    <button className='text-xs tracking-wide rounded-md px-4 font-semibold py-2 bg-[#186ade] text-white'>Share</button>
                </div>
            </div>
        </div>
        <Title />
    </section>
  )
}

export default Page