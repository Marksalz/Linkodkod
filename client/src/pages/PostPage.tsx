import { useParams } from "react-router";
import Post from "../components/Post";
import { useEffect, useState } from "react";

export default function PostPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState(undefined);

  let { id } = useParams();

  useEffect(() => {
    document.title = "Post";
    const getPost = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`http://localhost:3040/api/posts/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          setErrorMessage("Error fetching post");
          return;
        }
        const data = await res.json();
        setPost(data["post"][0]);
        setErrorMessage("");
        localStorage.setItem("posts", JSON.stringify(data));
        return data;
      } catch (error) {
        setErrorMessage("Error fetching post");
      } finally {
        setIsLoading(false);
      }
    };
    getPost();
  }, []);

  return (
    <div className="post_container">
      {isLoading && <p>Loading data...</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {post && <Post postInfo={post} likeUrl="../src/assets/likeImg.png" />}
    </div>
  );
}
