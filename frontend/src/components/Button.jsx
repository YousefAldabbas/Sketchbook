import React from "react";

export function Button({ to, text }, props) {
  return (
    <div>
      <button
        className="group relative inline-block focus:outline-none focus:ring"
        onClick={() => (to ? navigate("share-art") : null)}
        {...props}
      >
        <span className="absolute inset-0 translate-x-0 translate-y-0   bg-yellow-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5 "></span>

        <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
          {text}
        </span>
      </button>
    </div>
  );
}
