import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


export default function Layout({ children }:{
  children: React.ReactNode
}) {
  return (
    <div className='bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white'>
    <Navbar />
    {children}
    <Footer />
    </div>
  )
}
