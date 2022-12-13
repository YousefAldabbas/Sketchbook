import {
  createPost,
  deletePost,
  getPost,
  getposts,
  updatePost,
} from "../service/post.service";

export async function createPostHandler(req, res, next) {
  try {
    const post = await createPost(req);
    return res.send(post);
  } catch (error) {
    return res.status(409).json({ error: error.message });
  }
}

export async function getPostsHandler(req, res, next) {
  try {
    const posts = await getposts();
    return res.send(posts);
  } catch (error) {
    return res.status(409).json({ error: error.message });
  }
}

export async function updatePostHandler(req, res, next) {
  try {
    const post = await updatePost(req);
    return res.send(post);
  } catch (error) {
    return res.status(409).json({ error: error.message });
  }
}
export async function deletePostHandler(req, res, next) {
  try {
    await deletePost(req);
    return res.status(404).send("deleted successfully");
  } catch (error) {
    return res.status(409).json({ error: error.message });
  }
}

export async function getPostHandler(req, res, next) {
  try {
    const post = await getPost(req);
    return res.send(post);
  } catch (error) {
    return res.status(409).json({ error: error.message });
  }
}
