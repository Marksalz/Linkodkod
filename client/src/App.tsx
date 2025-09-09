import "./App.css";
import "../src/styles/nav.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import Layout from "./application-layout/Layout";
import { PostsProvider } from "./contexts/posts.context";
import PostPage from "./pages/PostPage";
import AddPostPage from "./pages/AddPostPage";

function App() {
  return (
    <PostsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/add_post" element={<AddPostPage  />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostsProvider>
  );
}

export default App;
