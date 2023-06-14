'use client'
import { useState } from 'react'
import Container from './Container';
import Link from 'next/link';

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [offcanvas, setOffcanvas] = useState(false);
  const [search, setSearch] = useState(false);
  const dropdownList = [
    {text:'Internet', href:'/posts'},
    {text:'Books', href:'/posts'},
    {text:'Open Source', href:'/posts'}
  ]

  return (
   
        <nav className='py-10'>
          <Container>
            <div className='flex items-center'>
              <div className='w-3/12 lg:hidden'>
                <button onClick={()=>setOffcanvas(!offcanvas)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                      <path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </svg>
                </button>
              </div>
              <div className='lg:w-2/12 w-6/12'>
                <Link href='/' className='flex items-center justify-center lg:justify-start'>
                  <div className='w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl'>E</div>
                  Epictetus
                </Link>
              </div>
              <div className='w-3/12 lg:hidden text-right'>
                <button  onClick={()=> setSearch(!search)}>
                  <svg className='inline-block' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </svg>
                </button>
              </div>
              <div className={`lg:w-7/12 w-full fixed top-0 lg:bg-none lg:static bg-gradient-to-b from-gray-600 to-gray-900 h-full lg:h-auto p-10 lg:p-0 transition-all ${offcanvas ? 'left-0': '-left-full'}`}>
                 <button className='absolute top-10 right-10 lg:hidden' onClick={()=>setOffcanvas(!offcanvas)}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                 </button>
                  <ul className="flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
                      <li className="mr-10">
                          <Link href='/posts' className='hover:underline'>
                            UI Design
                          </Link>
                      </li>
                      <li className="mr-10">
                          <Link href='/posts' className='hover:underline'>
                            Front-End
                          </Link>
                      </li>
                      <li className="mr-10">
                          <Link href='/posts' className='hover:underline'>
                            Back-End
                          </Link>
                      </li>
                      <li className="mr-10">
                          <a href="#"  onClick={()=> setDropdown(!dropdown)} className='hover:underline flex items-center'>Lainnya 
                          <svg className='ml-1' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6L8 10L12 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          </a>
                          {dropdown && (
                          <ul className='absolute w-[200px] bg-gray-800 rounded mt-4 shadow-2xl'>
                            {dropdownList.map(({text, href}) => (
                              <li key={text} className='border-b border-white/5'>
                                  <Link href={href} className='flex py-3 px-6  hover:bg-gray-700/60 last:border-0'>
                                    {text}
                                  </Link>
                              </li>
                            ))}
                          </ul>
                          )}
                      </li>
                  </ul>
              </div>
              <div className={`lg:w-3/12 absolute lg:static w-full left-0 lg:h-auto px-10 lg:px-0 transition-all ${search ? 'top-10' : '-top-40'}`}>
              <button className='absolute top-3 right-12 lg:hidden' onClick={()=>setSearch(!search)}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                 </button>
                <input className='bg-gray-700 py-3 px-6 w-full lg:rounded-full rounded-lg bg-search pl-12' placeholder='Search...' />
              </div>
            </div>
          </Container>
        </nav>
  )
}
