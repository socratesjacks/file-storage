import './globals.css'
import type { Metadata } from 'next'
import { Oxanium,  } from 'next/font/google'
import Nav from './(shared)/nav'

const inter = Oxanium({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cloud Storage',
  description: 'a file storage application for student , developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className='flex'>
          <Nav />
          <div className='w-[100%]'>
            {children}
          </div>
        </section>
        
      </body>
    </html>
  )
}
