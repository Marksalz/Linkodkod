import { Outlet } from "react-router";
import "../styles/loginForm.css";
import "../styles/posts.css";
import "../styles/addPost.css";

export default function Content() {
  return (
    <main className="main_content">
      <Outlet />
    </main>
  );
}
