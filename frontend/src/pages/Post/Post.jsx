import React from "react";
import { useGetPostQuery } from "../../features/post/postApiSlice";
import { useNavigate, useParams } from "react-router-dom";
function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: post, isLoading } = useGetPostQuery(id);
  if(isLoading){
    return <div>loading...</div>
  }
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <button
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div>{post?._id}</div>
        <div>{post?.author.username}</div>
        <div>{post?.content}</div>
      </button>
    </div>
  );
}

export default Post;
