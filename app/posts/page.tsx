'use client'
import { useState } from "react";
import Layout from '../components/Layout'
import Container from '../components/Container'
import mockPosts from "../utils/posts.json";
import CardPost from "../components/CardPost";
import SectionHeader from "../components/SectionHeader";

export default function Posts() {
  const [posts, setPosts] = useState(mockPosts)
  return (
    <Layout>
        <Container>
            <SectionHeader>UI Design</SectionHeader>
            {!posts.length ? (
                <div className="text-center">
                    <h2 className="text-6xl">No result 😥</h2>
                    <p className="text-xl mt-4 text-white/60 md:w-6/12 w-full mx-auto">We couldn’t find any posts with the keyword `yahahahayuk`. Please try another keyword.</p>
                </div>
            ):(
            <div className="mt-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 ">
                    {posts.map(post => (
                    <CardPost key={post.id} {...post}
                    />
                    ))}
                </div>
            </div>
            )}
        </Container>
    </Layout>
  )
}
