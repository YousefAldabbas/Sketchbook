import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetTestQuery,
  selectTestResult,
} from "../../features/test/testApiSlice";

function Home() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/posts");
      }}
    >
      {" "}
      posts
    </button>
  );
}

export default Home;
