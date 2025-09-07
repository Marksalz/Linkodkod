import mockPosts from "../mockPosts.json" with { type: 'json' };

export function readPosts() {
  const posts = mockPosts;
  return posts;
}
