import { useEffect } from "react";
import "./App.css";
import mockPosts from "./assets/mockPosts.json";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import Layout from "./application-layout/Layout";

const posts = mockPosts;
console.log(posts);

function App() {
  useEffect(() => {
    document.title = "posts";
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage posts={posts} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
