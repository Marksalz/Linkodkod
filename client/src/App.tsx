import "./App.css";
import mockPosts from "./assets/mockPosts.json";
import Homepage from "./pages/Homepage";

const posts = mockPosts;
console.log(posts);

function App() {
  return (
    <>
      <Homepage posts={posts} />
    </>
  );
}

export default App;
