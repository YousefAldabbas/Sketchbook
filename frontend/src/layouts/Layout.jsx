import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  return (
    <div className="scrollbar">
      {/* <div className="flex justify-end">
        <button
          onClick={() => navigate(-1)}
          className="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div> */}
      <Outlet />
    </div>
  );
}

export default Layout;
