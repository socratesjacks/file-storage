import React from 'react'
import { AiFillFileMarkdown } from 'react-icons/ai'

type Props = {}

const page = (props: Props) => {
  return (
    <section className='flex mb-10 mt-10 md:mt-0 gap-10 flex-col items-center justify-center md:h-[90vh]'>
        <div className='flex flex-col items-center'>
            <h1 className='font-medium text-3xl'>Pricing page</h1>
            <p className='text-xs'>Choose the best pricing for your needs</p>
        </div>
        <div className='flex justify-center gap-4 flex-wrap'>
            <div className='border rounded-md p-2 w-48 flex flex-col'>
                <div className='flex p-4 border-b flex-col gap-1'>
                    <p className='text-xs font-bold'>Free plan</p>
                    <p className='text-xs'>Up to 100mb</p>
                </div>
                <div className='flex p-4 border-b flex-col gap-1'>
                    <p className='text-[#186ade] font-bold text-xl'>$0/mo</p>
                    <p className='text-sm text-slate-600'>30 days free trial</p>
                    <button className='text-xs mt-3 rounded-md py-2 px-1 font-black text-slate-600 bg-slate-300'>Get started</button>
                </div>
                <div className='flex p-4 flex-col gap-2'>
                    <p className='text-xs'>Storage space +100mb</p>
                    <p className='text-xs'>File size limit(e.g 2mb)</p>
                    <p className='text-xs'>10 downloads per month</p>
                </div>
            </div>
            <div className='border rounded-md p-2 w-48 flex flex-col'>
                <div className='flex p-4 border-b flex-col gap-1'>
                    <p className='text-xs font-bold'>Free plan</p>
                    <p className='text-xs'>Up to 100mb</p>
                </div>
                <div className='flex p-4 border-b flex-col gap-1'>
                    <p className='text-[#186ade] font-bold text-xl'>$0/mo</p>
                    <p className='text-sm text-slate-600'>30 days free trial</p>
                    <button className='text-xs mt-3 rounded-md py-2 px-1 font-black text-slate-600 bg-slate-300'>Get started</button>
                </div>
                <div className='flex p-4 flex-col gap-2'>
                    <p className='text-xs'>Storage space +150mb</p>
                    <p className='text-xs'>File size limit(e.g 10mb)</p>
                    <p className='text-xs'>unlimited downloads per month</p>
                    <p className='text-xs'>Priority support(e.g live chat and email support)</p>
                </div>
            </div>
            <div className='border rounded-md p-2 w-48 flex flex-col'>
                <div className='flex p-4 border-b flex-col gap-1'>
                    <p className='text-xs font-bold'>Pro plan</p>
                    <p className='text-xs'>Up to 100mb</p>
                </div>
                <div className='flex p-4 border-b flex-col gap-1'>
                    <p className='text-[#186ade] font-bold text-xl'>$20/mo</p>
                    <p className='text-sm text-slate-600'>or $210 yearly</p>
                    <button className='text-xs mt-3 rounded-md py-2 px-1 font-black text-slate-600 bg-slate-300'>Get started</button>
                </div>
                <div className='flex p-4 flex-col gap-2'>
                    <p className='text-xs'>Storage space +200mb</p>
                    <p className='text-xs'>Feature test goes here</p>
                    <p className='text-xs'>unlimited downloads per month</p>
                    <p className='text-xs'>Priority support(e.g live chat and email support)</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default page