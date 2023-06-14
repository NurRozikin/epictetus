import React from 'react'

interface Props {
  authorAvatar:string,
  authorName:string,
  authorJob:string
}

export default function PostAuthor({authorAvatar, authorName, authorJob}:Props) {
  return (
    <>
        <div className="flex items-center mt-6">
            <img src={authorAvatar} className="w-14 h-14 rounded-full object-cover" />
            <div className="ml-4">
                <h3>{authorName}</h3>
                <div className="text-white/60 text-sm mt-1">
                    {authorJob}
                </div>
            </div>
        </div>
    </>
  )
}
