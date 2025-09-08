import { useEffect, useState } from "react";
import Post from "../components/Post";
import { usePosts } from "../contexts/posts.context.tsx";

export default function Homepage() {
  const postsContext = usePosts();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch(`http://localhost:3040/api/posts`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          setErrorMessage("Error fetching posts");
          return;
        }
        const data = await res.json();
        setErrorMessage("");
        postsContext.setPosts(data["posts"]);

        localStorage.setItem("posts", JSON.stringify(data));
        return data;
      } catch (error) {
        setErrorMessage("Error fetching posts");
      }
    };
    getPosts();
  }, []);

  return (
    <div className="posts_list">
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {postsContext.posts &&
        postsContext.posts.map((post) => (
          <Post key={String(post.id)} postInfo={post} />
        ))}
    </div>
  );
}
