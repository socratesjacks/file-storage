import Contact from '@components/contact'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <section className='flex p-4 justify-center items-center h-[90vh]'>
        <Contact />
    </section>
  )
}

export default page