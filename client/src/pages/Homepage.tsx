import Post from "../components/Post";
import type PostInfo from "../interfaces/postDataType";

export default function Homepage(props: { posts: PostInfo[] }) {
  return (
    <div className="posts_list">
      {props.posts.map((post, idx) => (
        <Post key={idx} postInfo={post} />
      ))}
    </div>
  );
}
