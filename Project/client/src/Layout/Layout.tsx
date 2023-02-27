import React, { ReactNode} from 'react'
import { Sidebar } from '../Components/Sidebar'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import explore from '../assets/undraw_explore_re_8l4v.svg'

type LayoutProps = {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='layout-container flex flex-col w-full h-screen bg-slate-50' style={
      {
        // backgroundImage: `url(${explore})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // opacity: '0.8'
    }
    }>
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
