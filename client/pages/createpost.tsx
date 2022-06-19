import { useMutation } from "@apollo/client";
import type { NextPage } from "next";
import { useState } from "react";
import Header from "../components/Header";
import { addSingleAuthor, addSinglePost } from "../graphql/mutation";
import { getAllPosts } from "../graphql/queries";

interface IAuthor {
  id?: string;
  name: string;
  age: number;
  posts?: IPost[];
}

interface IPost {
  id?: string;
  name: string;
  content: string;
  genre: string;
  authorId: String;
}

const CreatePost: NextPage = () => {
  const [addAuthor, { data, loading, error }] = useMutation(addSingleAuthor);
  const [addPost, dataMutation2] = useMutation(addSinglePost);
  const [author, setAuthor] = useState<IAuthor>({
    name: "",
    age: 0,
  });
  const [post, setPost] = useState<IPost>({
    name: "",
    content: "",
    genre: "",
    authorId: "",
  });
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (
      author.name &&
      author.age &&
      post.name &&
      post.content &&
      post.genre &&
      post.authorId
    ) {
      addAuthor({
        update: (proxy, mutationResult) => {
          addPost({
            variables: {
              name: post.name,
              content: post.content,
              genre: post.genre,
              authorId: mutationResult.data.createAuthor.id,
            },
            refetchQueries: [{ query: getAllPosts }],
          });
        },
        variables: {
          name: author.name,
          age: author.age,
        },
      });
      setAuthor({
        name: "",
        age: 0,
      });
      setPost({
        name: "",
        content: "",
        genre: "",
        authorId: "",
      });
    }
  };

  return (
    <div className="CreatePost">
      <Header />
      <div className="CreatePost__container">
        <h1>Create Post</h1>
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) =>
              //set for post
              setPost({ ...post, name: e.target.value })
            }
          />
          <label>Content</label>
          <textarea
            name="content"
            onChange={(e) =>
              //set for post
              setPost({ ...post, content: e.target.value })
            }
          />
          <label>Genre</label>
          <select
            name="genre"
            onChange={(e) =>
              //set for post
              setPost({ ...post, genre: e.target.value })
            }
          >
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Thriller">Thriller</option>
          </select>
          <label>Author</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setAuthor({ ...author, name: e.target.value })}
          />
          <label>Author Age</label>
          <input
            type="number"
            name="age"
            onChange={(e) =>
              setAuthor({ ...author, age: Number(e.target.value) })
            }
          />
          <button type="submit">Create</button>
        </form>
        {dataMutation2.data ? (
          <div className="alert">Create Post Successfully</div>
        ) : null}
      </div>
    </div>
  );
};

export default CreatePost;
