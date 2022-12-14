import PostModel from "../model/post.model";

export const createPost = async (req) => {
  try {
    const { content } = req.body;
    console.log(req.user);
    const post = await PostModel.create({
      content,
      author: req.user._id,
    })
    // .populate("author","username");
    return post;
  } catch (error) {
    throw new Error(error);
  }
};

export const updatePost = async (req) => {
  try {
    const { content } = req.body;
    const { id } = req.params;
    const user = req.user;
    const post = await PostModel.findOne({
      _id: id,
      author: user._id,
    }).populate("author","username");
    if (!post) {
      throw new Error("User not allowed to make changes");
    }
    post.content = content;
    await post.save();
    return post;
  } catch (error) {
    throw new Error(error);
  }
};

export const deletePost = async (req) => {
  try {
    const { id } = req.params;
    const user = req.user;
    const post = await PostModel.findOne({
      _id: id,
      author: user._id,
    })

    if (!post) {
      throw new Error("User not allowed to make changes");
    }
    post.delete()
    return true;
  } catch (error) {
    throw new Error(error);
  }
};

export const getposts = async () => {
  try {
    const posts = await PostModel.find().populate({path:"author",select:"username-_id"});
    return posts;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPost = async (req) => {
  try {
    const { id } = req.params;
    const post = await PostModel.findOne({ _id: id }).populate("author","username");
    return post;
  } catch (error) {
    throw new Error(error);
  }
};
