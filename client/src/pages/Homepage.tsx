import { useEffect, useState } from "react";
import Post from "../components/Post";
import { usePosts } from "../contexts/posts.context.tsx";
import { useNavigate } from "react-router";

export default function Homepage() {
  //window.location.reload();
  const postsContext = usePosts();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Home Page";
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`http://localhost:3040/api/posts`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (res.status === 401) {
          throw new Error(await res.text());
        }

        const data = await res.json();

        setErrorMessage("");
        postsContext.setPosts(data["posts"]);

        localStorage.setItem("posts", JSON.stringify(data));
        return data;
      } catch (error: any) {
        setErrorMessage("Error fetching posts: " + error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getPosts();
  }, []);

  const navigate = useNavigate();

  const handleClick = (id: any): void => {
    navigate(`/post/${id}`);
  };

  return (
    <div>
      <section className="add_post">
        <button
          onClick={() => {
            navigate("/add_post");
          }}
        >
          Add new post
        </button>
      </section>
      <div className="posts_list">
        {isLoading && <p>Loading data...</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {postsContext.posts &&
          postsContext.posts.map((post) => (
            <Post
              key={String(post.id)}
              postInfo={post}
              likeUrl="src/assets/likeImg.png"
              onClick={post.id && (() => handleClick(post.id))}
              class="post_card"
            />
          ))}
      </div>
    </div>
  );
}
