import React from 'react'
import { AiOutlineInsertRowAbove, AiOutlineUnorderedList } from 'react-icons/ai'
import Folder from './folder/Folder'

type Props = {}

const Title = (props: Props) => {
  return (
    <div className=''>
        <div className='flex justify-between'>
            <div className='text-xs font-bold text-slate-400 flex gap-8'>
                <button>All</button>
                <button>Images</button>
                <button>Videos</button>
                <button>Documents</button>
            </div>
            <div className='text-xs flex items-center gap-10'>
                <div className='flex items-center gap-3'>
                    <p>Sort by</p>
                    <button className='text-[#186ade] font-semibold'>Newest</button>
                </div>
                <div className='flex items-center gap-3'>
                    <AiOutlineInsertRowAbove />
                    <AiOutlineUnorderedList />
                </div>
            </div>
        </div>    
        <div>
            <button className='text-sm font-bold my-4'>Folder</button>
            <div>
                <Folder />
            </div>
        </div>
    </div>
  )
}

export default Title