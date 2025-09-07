import { useEffect } from "react";
import "./App.css";
import mockPosts from "./assets/mockPosts.json";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const posts = mockPosts;
console.log(posts);

function App() {
  useEffect(() => {
    document.title = "posts";
  }, []);

  return (
    <>
      <Header />
      <Homepage posts={posts} />
      <Footer />
    </>
  );
}

export default App;
