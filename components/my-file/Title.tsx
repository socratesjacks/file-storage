import React from 'react'
import { AiOutlineInsertRowAbove, AiOutlineUnorderedList } from 'react-icons/ai'
import Folder from './folder/Folder'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import Files from './files/Files'

type Props = {}

const Title = (props: Props) => {
  return (
    <div className=''>
        <div className='flex gap-4 md:gap-0 md:flex-row flex-col mb-7 justify-between'>
            <div className='text-xs flex-wrap font-bold text-slate-400 flex gap-8'>
                <button>All</button>
                <button>Images</button>
                <button>Videos</button>
                <button>Documents</button>
            </div>
            <div className='text-xs flex items-center gap-10'>
                <div className='flex items-center gap-3'>
                    <p>Sort by</p>
                    <button className='text-[#186ade] flex gap-2 items-center font-semibold'>Newest<BiChevronDown className='text-2xl'/></button>
                </div>
                <div className='flex items-center gap-3'>
                    <AiOutlineInsertRowAbove />
                    <AiOutlineUnorderedList />
                </div>
            </div>
        </div>    
        <div>
            <button className='text-sm flex items-center gap-1 font-bold my-4'><BiChevronUp className='text-2xl'/>Folder</button>
            <div>
                <Folder />
            </div>
        </div>
        <div>
            <button className='text-sm flex items-center gap-1 font-bold my-4'><BiChevronUp className='text-2xl'/>Files</button>
            <div>
                <Files />
            </div>
        </div>
    </div>
  )
}

export default Title