import React, { ReactNode} from 'react'
import { Sidebar } from '../Components/Sidebar'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'

type LayoutProps = {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='layout-container flex flex-col w-full h-screen bg-slate-50'>
      <Header />
      <main className='main-container border-gray-800 border-[2px] px-10 justify-center items-center mt-24'>
        {/* <Hero /> */}
        {children}
      </main>
      {/* <Sidebar />
      <Footer /> */}
    </div>
  )
}
