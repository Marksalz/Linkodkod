import {
  createNewPost,
  readById,
  readPosts,
  updatePostById,
} from "../services/postService.js";

async function readAllPosts(req, res) {
  try {
    const posts = await readPosts();
    console.error("Success");
    res.json({ success: "Get posts was successful", posts: posts });
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
    res.json({ success: "Get post was successful", post: post });
  } catch (error) {
    console.error("Failed to fetch post:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch post.", details: error.message });
  }
}

async function createPost(req, res) {
  try {
    const newPost = await createNewPost(req.body);
    res.json({ success: "Post was created successfully", post: newPost });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create post.", details: error.message });
  }
}

async function updatePost(req, res) {
  try {
    const id = req.params.id;
    const post = req.body;
    const updatedPost = await updatePostById(post, id);
    res.json({ success: "Post was updated successfully", post: updatedPost });
  } catch (error) {
    if (error.message === "post not found 404") {
      res.status(404).end("Student not found");
    } else {
      res
        .status(500)
        .json({ error: "Failed to update post.", details: error.message });
    }
  }
}

const postsCtrl = {
  readAllPosts,
  readPostById,
  createPost,
  updatePost,
};

export default postsCtrl;
