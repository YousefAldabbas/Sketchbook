import React from "react";

import { useToggle } from "../../hooks";
import threeDots from "../../../public/three-dots-f.svg";
import threeDotsW from "../../../public/three-dots-w.svg";

import { useDeletePostMutation } from "../../features/post/postApiSlice"

function Modal({postId}) {
  const [hover, setHover] = useToggle();
  const [openModal, setOpenModal] = useToggle();
  const  [deletePost]  = useDeletePostMutation()
  
  return (
    <div class="inline-flex items-stretch rounded-md ">
      <div class="relative">
        <a
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => setOpenModal(!openModal)}
        >
          <img src={hover ? threeDotsW : threeDots} alt="" className="w-4" />
        </a>
        {openModal && (
          <div
            class="absolute right-0 z-10 mt-4 w-40 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg"
            role="menu"
          >
            <div class="p-1">
              <a
                href="#"
                class="block x w-full items-center gap-2 rounded-lg px-1 py-1 text-xs  hover:bg-red-50"
                role="menuitem"
              >
                Update Post
              </a>

                <button
                  class="flex w-full items-center gap-2 rounded-lg px-1 py-1 text-xs text-red-700 hover:bg-red-50"
                  role="menuitem"
                  onClick={async()=> await deletePost(postId)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Delete Post
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
