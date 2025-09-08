import { useEffect, useState } from "react";
import Post from "../components/Post";
import { usePosts } from "../contexts/posts.context.tsx";

export default function Homepage() {
  const postsContext = usePosts();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
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
      } finally {
        setIsLoading(false);
      }
    };
    getPosts();
  }, []);

  return (
    <div className="posts_list">
      {isLoading && <p>Loading data...</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {postsContext.posts &&
        postsContext.posts.map((post) => (
          <Post key={String(post.id)} postInfo={post} />
        ))}
    </div>
  );
}
