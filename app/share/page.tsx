"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { AiFillCopy, AiOutlineCopy, AiOutlineUpload } from 'react-icons/ai';
import { BiChevronLeft } from 'react-icons/bi';
import { MdUploadFile } from 'react-icons/md';

type Props = {}

const Page = (props: Props) => {
  const router = useRouter();
  const goBack = () => {
    router.back()
  }
  return (
    <section className='p-4 flex flex-col gap-4 h-[90v]'>
        <div className='flex justify-between'>
            <p onClick={goBack} className='flex text-sm md:text-base font-bold items-center gap-3 '><BiChevronLeft className=''/>Select files to share</p>
            <div className='md:flex hidden  gap-4'>
                <button className='text-xs font-semibold rounded-md w-32 justify-center px-3 py-2 border border-[#73adff] text-[#73adff] flex items-center gap-1'><AiOutlineUpload /> Add Files</button>
                <button className='text-xs font-semibold bg-slate-300 text-slate-600 rounded-md w-32 justify-center px-3 py-2 border flex items-center gap-1'><AiOutlineCopy />Copy Link</button>
            </div>
        </div>
        <div className=' h-72 md:h-[80vh] flex flex-col gap-3 md:p-16'>
            <div className='flex h-full flex-col border border-[#73addf] gap-2 justify-center items-center'>
                <p className='hidden md:block text-xs'>Drag files here or</p>
                <button className='text-xs font-semibold rounded-md  justify-center px-3 py-2 border border-[#73adff] text-[#73adff] flex items-center gap-1'><AiOutlineUpload /> Upload from device</button>
            </div>
            <div className='flex md:hidden flex-col gap-4'>
                <button className='text-xs font-semibold rounded-md justify-center px-3 py-2 border border-[#73adff] text-[#73adff] flex items-center gap-1'><AiOutlineUpload /> Add Files</button>
                <button className='text-xs font-semibold bg-slate-300 text-slate-600 rounded-md justify-center px-3 py-2 border flex items-center gap-1'><AiOutlineCopy />Copy Link</button>
            </div>
        </div>
    </section>
  )
}

export default Page