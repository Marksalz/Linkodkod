import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type PostInfo from "../interfaces/postDataType";

interface PostsContextType {
  posts: PostInfo[] | undefined;
  setPosts: React.Dispatch<React.SetStateAction<PostInfo[] | undefined>>;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export function PostsProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<PostInfo[] | undefined>(undefined);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
}
