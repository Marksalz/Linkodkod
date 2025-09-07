import "./App.css";
import Post from "./components/Post";
import type PostInfo from "./interfaces/postDataType";

function App() {
  return (
    <>
      <Post postInfo={posts} />
    </>
  );
}

export default App;

const posts: PostInfo = {
  imgSrc:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDYcBgDodY-2g5vAtnwSBW2l4PNWTkL0HHzw&s",
  likes: 344,
  description: "cute cat pic hasajkahs asanskajskajsa saskajsajsa sanskasj sdkjdsjd dsnkdsnkdsc cnksncksc sncksncks ",
  name: "Menachem Salzberg",
  timestamp: "09/07/2025 12:00pm",
};
