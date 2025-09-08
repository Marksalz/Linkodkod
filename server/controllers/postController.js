import { readById, readPosts } from "../services/postService.js";

async function readAllPosts(req, res) {
  try {
    const posts = await readPosts();
    console.error("Success");
    res.json({ success: "Get was successful", posts: posts });
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch posts.", details: error.message });
  }
}

async function readPostById(req, res) {
  try {
    const id = req.params.id;
    const post = await readById(id);
    res.json({ success: "Get was successful", post: post });
  } catch (error) {
    console.error("Failed to fetch post:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch post.", details: error.message });
  }
}

const postsCtrl = {
  readAllPosts,
  readPostById,
};

export default postsCtrl;
