import type { NextPage } from "next";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { getAllPosts } from "../graphql/queries";
import Post from "../components/Post";
import Header from "../components/Header";
interface IAuthor {
  id: string;
  name: string;
  age: number;
  posts: IPost[];
}
interface IPost {
  id: string;
  name: string;
  content: string;
  genre: string;
  author: IAuthor;
}
const Home: NextPage = () => {
  const { data, loading, error } = useQuery(getAllPosts);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="Home">
      <Header />
      <div className="Home__container">
        {data?.posts.map((post: IPost) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
