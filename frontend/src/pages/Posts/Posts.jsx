import React from "react";
import { useGetPostsQuery } from "../../features/post/postApiSlice";
import { useNavigate } from "react-router-dom";
function Posts() {
  const { data } = useGetPostsQuery();
  let navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>

      <div>
        {data?.map((p, i) => {
          return (
            <button
              key={`post___${i}`}
              style={{
                border: "1px solid",
                padding: "15px",
                margin: "10px",
              }}
              onClick={() => {
                navigate(`${p._id}`);
              }}
            >
              <p>{p.content}</p>
              <p>by {p.author.username}</p>
              <span>comments {p.comments.length}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
