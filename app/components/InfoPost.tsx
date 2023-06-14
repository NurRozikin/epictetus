import PostAuthor from "./PostAuthor"
import PostMetaTitle from "./PostMetaTitle"

interface Props{
    category:string,
    date:string,
    title:string,
    shortDescription:string,
    authorAvatar:string,
    authorName:string,
    authorJob:string
}
export default function InfoPost({
    category,
    date,
    title,
    shortDescription,
    authorAvatar,
    authorName,
    authorJob
}:Props){
  return (
    <>
        <PostMetaTitle category={category} date={date} title={title} />  
        <p className="text-white/60 mt-6 w-10/12">
        {shortDescription}
        </p>
        <PostAuthor authorAvatar={authorAvatar} authorName={authorName} authorJob={authorJob} />        
    </>
  )
}
