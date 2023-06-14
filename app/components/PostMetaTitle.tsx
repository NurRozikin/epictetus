import Link from 'next/link'
import React from 'react'

interface Props {
    category:string,
    date:string,
    title:string,
    center?:boolean
}

export default function PostMetaTitle({category, date, title, center}: Props) {
  return (
   <>
        <div className="flex items-center text-white/60 space-x-4">
            <div className="uppercase">
                {category}
            </div>
            <span>&bull;</span>
            <div>
                {date}
            </div>
        </div>
        <h2 className={`text-2xl mt-4 ${center ? 'text-center' : ''}`}>
            <Link href='/detail'>
                {title}
            </Link>
        </h2>
   </>
  )
}
