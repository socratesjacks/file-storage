import Image from 'next/image'
import { AiOutlineShareAlt } from 'react-icons/ai'

export default function Home() {
  return (
    <main className="flex flex-col px-4 gap-3 items-center h-[90vh] justify-center">
        <div className='text-xl items-center flex flex-col font-bold'>
          <span>Hello Guest, Welcome to</span>
          <span className='text-[#185ade]'>the PerfectShare</span>
        </div>
        <div className='text-xs text-center text-slate-700 flex flex-col items-center'>
          <p>Start sharing your files to in between staff among organisations.</p>
          <p>You can use key link to easily share your files</p>
        </div>  
        <button className='text-xs mt-5 tracking-wide rounded-md px-4 font-semibold py-2 bg-[#186ade] text-white flex items-center gap-1'><AiOutlineShareAlt className='text-base' />Begin Sharing</button>
    </main>
  )
}
