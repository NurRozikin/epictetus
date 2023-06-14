'use client'
import { useState } from "react";
import CardPost from "./components/CardPost";
import InfoPost from "./components/InfoPost";
import FeaturePost from "./components/FeaturePost";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Layout from "./components/Layout";
import mockPosts from "./utils/posts.json";
import Head from "next/head";


export default function Home() {
  const [posts, setPosts] = useState(mockPosts)
  
  return (
    <Layout>
      <Container>
        <FeaturePost />
        <div className="mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 ">
            {posts.map(post => (
              <CardPost key={post.id} {...post}
              />
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  )
}
