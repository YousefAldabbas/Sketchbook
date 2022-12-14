import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreatePostMutation } from "../../features/post/postApiSlice";
import { setPost } from "../../features/post/postSlice";
import { Button } from "../../components";
function CreatePost() {
  const navigate = useNavigate();
  const [p, setP] = useState();
  const [createPost, { isLoading, isError, message }] = useCreatePostMutation();

  async function handleSubmit(e) {
    e.preventDefault();
    await createPost({ content: p });
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {isError && <div>{message}</div>}
      <form className="mb-6" onSubmit={handleSubmit}>
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label htmlFor="post" className="sr-only">
            Your post
          </label>
          <textarea
            id="post"
            rows="14"
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Write a post..."
            required
            onChange={(e) => setP(e.target.value)}
          ></textarea>
        </div>
        <Button type="submit" text={"submit"} />
      </form>
    </div>
  );
}

export default CreatePost;
