import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RequireAuth from "./features/auth/RequireAuth";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import PostLayout from "./layouts/PostLayout";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/home" element={<Home />} />
          <Route element={<PostLayout />}>
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<Post />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
