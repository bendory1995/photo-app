import Post from "./Post";
import Image from "next/image";

const posts = [
  {
    id: "123",
    username: "alexhboh",
    userImg: "/profile.png",
    img: "/profile.png",
    caption: "this is cool",
  },
  {
    id: "123",
    username: "alexhboh",
    userImg: "/profile.png",
    img: "/profile.png",
    caption: "this is cool",
  },
];
function Posts() {
  return (
    <div>
      {/*POST*/}
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}

      <Post />

      <Post />

      <Post />
      {/*POST*/}
      {/*POST*/}
    </div>
  );
}
export default Posts;
