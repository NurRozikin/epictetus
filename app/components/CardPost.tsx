import React from 'react'
import InfoPost from "./InfoPost";
import Link from 'next/link';

interface Props{
  thumbnail:string,
  category:string,
  date:string,
  title:string,
  shortDescription:string,
  authorAvatar:string,
  authorName:string,
  authorJob:string
}

export default function CardPost({
  thumbnail,
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob
}:Props) {
  return (
    <div className="py-6">
    <Link href='/detail'>
      <img src={thumbnail} className="rounded-xl" />
    </Link>
    <InfoPost 
    category={category} 
    date={date} title={title} shortDescription={shortDescription} authorAvatar={authorAvatar} authorName={authorName} authorJob={authorJob} /> 
  </div>
  )
}
