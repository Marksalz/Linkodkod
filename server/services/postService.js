import { readFile, writeFile } from "node:fs/promises";

const filePath = "C:\\JSProjects\\Linkodkod\\server\\DAL\\mockPosts.json";

export async function readPosts() {
  try {
    const posts = await readFile(filePath, "utf8");
    return JSON.parse(posts);
  } catch (error) {
    throw new Error("Failed to read posts", error.message);
  }
}

export async function readById(id) {
  try {
    const posts = await readPosts();
    const filteredPost = posts.filter((post) => post.id === Number(id));
    return filteredPost;
  } catch (error) {
    throw new Error("Failed to read post", error.message);
  }
}
