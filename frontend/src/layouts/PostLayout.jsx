import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
function PostLayout() {
  return (
    <div className="flex h-screen overflow-hidden">

      <Sidebar/>
      <div className="flex-grow overflow-y-scroll">
      <Outlet />
      </div>
      {/* search and trending tags */}
      <Sidebar/>
    </div>
  );
}

export default PostLayout;
