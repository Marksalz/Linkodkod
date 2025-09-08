import { readFile, writeFile } from "node:fs/promises";

const filePath = "C:\\JSProjects\\Linkodkod\\server\\DAL\\mockPosts.json";

export async function readPosts() {
  try {
    const posts = await readFile(filePath, "utf8");
    return JSON.parse(posts);
  } catch (err) {
    throw new Error("Failed to read posts", err.message);
  }
}
