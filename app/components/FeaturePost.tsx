import Link from "next/link";
import InfoPost from "./InfoPost";

export default function FeaturePost() {
  return (
        <article>
            <div className="flex -mx-4 lg:items-center items-start flex-wrap">
                <div className="px-4 lg:w-8/12 md:w-7/12">
                    <Link href='/detail'>
                    <img src="/featured-thumbnail.png" className="rounded-xl w-full mb-4" />
                    </Link>
                </div>
                <div className="lg:w-4/12 px-4 md:w-5/12">
                   <InfoPost 
                   category="UI DESIGN" 
                   date="July 2, 2021" 
                   title="Understanding color theory: the color wheel and finding complementary colors"
                   shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
                   authorAvatar="/author-1.png"
                   authorName="Leslie Alexander"
                   authorJob="UI Designer"
                   />
                </div>
            </div>
            <hr className="border-white/10 mt-10 md:hidden"/>
        </article>
  )
}
