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
    if (filteredPost.length <= 0) {
      throw new Error("post not found 404");
    }
    return filteredPost;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createNewPost(newPost) {
  try {
    const posts = await readPosts();
    newPost.id = Number(
      posts.length > 0 ? Math.max(...posts.map((p) => Number(p.id))) + 1 : 1
    );
    newPost.timestamp = Date().toLocaleString();
    const fileName = "http://localhost:3040/" + newPost.imgSrc;
    newPost.imgSrc = fileName;
    posts.push(newPost);
    await writeFile(filePath, JSON.stringify(posts, null, 2), "utf8");
    return newPost;
  } catch (error) {
    throw new Error("Failed to create post: ", error.message);
  }
}

export async function updatePostById(post, id) {
  try {
    const posts = await readPosts();
    const idx = posts.findIndex((p) => p.id === Number(id));
    if (idx === -1) {
      throw new Error("post not found 404");
    }
    posts[idx] = { ...posts[idx], ...post };
    await writeFile(filePath, JSON.stringify(posts, null, 2), "utf8");
    return posts[idx];
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deletePostById(id) {
  try {
    const posts = await readPosts();
    const idx = posts.findIndex((p) => p.id === Number(id));
    if (idx === -1) {
      throw new Error("post not found 404");
    }
    const deleted = posts.splice(idx, 1)[0];
    await writeFile(filePath, JSON.stringify(posts, null, 2), "utf8");
    return deleted;
  } catch (error) {
    throw new Error(error.message);
  }
}
