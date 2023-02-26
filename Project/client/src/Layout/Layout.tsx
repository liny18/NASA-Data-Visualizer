import React from 'react'
import { Sidebar } from '../Components/Sidebar'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import { Hero } from '../Components/Hero'

export const Layout = () => {
  return (
    <div className='layout-container flex flex-col w-full h-screen bg-slate-50'>
      <Header />
      <main className='main-container flex flex-row h-full border-gray-800 border-[2px] px-10 justify-center items-center'>
        <Hero />
      </main>
      {/* <Sidebar />
      <Footer /> */}
    </div>
  )
}
