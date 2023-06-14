import React from 'react'
import InfoPost from "./InfoPost";
import Link from 'next/link';


export default function CardPost({thumbnail, ...infoPost}) {
  return (
    <div className="py-6">
    <Link href='/detail'>
      <img src={thumbnail} className="rounded-xl" />
    </Link>
    <InfoPost 
         {...infoPost}
         />
  </div>
  )
}
