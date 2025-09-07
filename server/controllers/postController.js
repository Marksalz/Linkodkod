import { readPosts } from "../services/postService.js";

export async function readAllPosts(req, res) {
  try {
    const posts = readPosts();
    console.error("Success");
    res.json({ success: "Get was successful", posts });
  } catch (error) {
    console.error("Failed to fetch riddles:", err);
    res
      .status(500)
      .json({ error: "Failed to fetch riddles.", details: err.message });
  }
}
