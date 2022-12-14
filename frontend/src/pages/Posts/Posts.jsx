import React, { useEffect } from "react";
import { useGetPostsQuery } from "../../features/post/postApiSlice";
import { useNavigate } from "react-router-dom";
import { useToggle } from "../../hooks";
import threeDots from "../../../public/three-dots-f.svg";
import threeDotsW from "../../../public/three-dots-w.svg";

import Modal from "./Modal";
function Posts() {
  const { data } = useGetPostsQuery();
  const navigate = useNavigate();

  useEffect(() => {
    console.log({ data });
  }, [data]);

  return (
    <div className="relative">
      <div className="flex justify-center flex-col gap-3 mb-4">
        <div>
          <button
            className="group relative inline-block focus:outline-none focus:ring"
            onClick={() => navigate("share-art")}
          >
            <span className="absolute inset-0 translate-x-0 translate-y-0   bg-yellow-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 "></span>

            <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
              create post
            </span>
          </button>
        </div>
        {/* {openModal && <Modal setOpenModal={setOpenModal}/>} */}
      </div>
      <div className="flex gap-4 flex-wrap justify-center md:justify-start">
        {data?.map((p, i) => {
          return (
            <article
              className="group  border p-2 rounded-2xl relative"
              key={`post___${i}`}
            >
              <img
                alt="Lava"
                src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full rounded-xl object-cover shadow-xl transition cursor-pointer
                z-1
                group-hover:grayscale-[50%] "
                onClick={() => {
                  navigate(`${p._id}`);
                }}
              />

              <div className="p-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    Finding the Journey to Mordor{" "}
                    {/* todo title go here + delete content */}
                  </h3>
                </a>

                <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                  {p.content}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex m-2 gap-2">
                  <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-500">
                    Live
                  </span>
                  <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-500">
                    Live
                  </span>
                  <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-500">
                    Live
                  </span>
                  <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-500">
                    Live
                  </span>
                </div>
                <Modal postId={p._id} />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;

// <!--
//   This component uses @tailwindcss/line-clamp

//   yarn add @tailwindcss/line-clamp
//   npm install @tailwindcss/line-clamp

//   plugins: [require('@tailwindcss/line-clamp')]
// -->
