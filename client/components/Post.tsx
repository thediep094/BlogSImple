import { useState } from "react";
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
const Post = (props: { post: IPost }) => {
  const [on, setOn] = useState<Boolean>(false);
  const onClick = () => {
    setOn(!on);
  };
  return (
    <div className="PostInfo">
      <div
        className="Post"
        onClick={() => {
          onClick();
        }}
      >
        <div className="Post__top">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy6O7O-oUgn2kzDzliJHB13aNxCRev1GQUPA&usqp=CAU"
            alt=""
            className="Post__avatar"
          />
          <div className="Post__info">
            <span className="Post__name">{props.post.name}</span>
            <span className="Post__genre">{props.post.genre}</span>
          </div>
        </div>
        <div className="Post__bottom">
          <p className="text">{props.post.content}</p>
        </div>
      </div>
      <div
        className="Author_info"
        style={{
          transform: on ? "translateX(0)" : "translateX(1000px)",
        }}
      >
        <span className="Author__info__text">
          Name: {props.post?.author?.name}
        </span>
        <span className="Author__info__text">
          Age: {props.post?.author?.age}
        </span>
        <span className="Author__info__text">
          Blogs:
          {props.post?.author?.posts.map((post: IPost) => (
            <div>{post.name}</div>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Post;
