import express from "express";
import {
  createPostHandler,
  deletePostHandler,
  getPostHandler,
  getPostsHandler,
  updatePostHandler,
} from "./controller/post.controller";
import {
  createUserHandler,
  loginUserHandler,
  refreshTokenHandler,
} from "./controller/user.controller";
import { protect } from "./middleware/authMiddleware";

export default function routes(app) {
  //  check if the server working
  app.get("/healthcheck", (req, res) => res.sendStatus(200));
  //  create user
  app.route("/auth/").post(createUserHandler);
  app.route("/auth/login").post(loginUserHandler);
  app.route("/auth/refresh").post(refreshTokenHandler);
  //  for testing only

  app.route("/protect").get(protect, (req, res) =>
    res.status(200).send([
      {
        id: 1,
        text: "hi",
      },
      {
        id: 2,
        text: "bye",
      },
    ])
  );
  app
    .route("/posts")
    .post(protect, createPostHandler)
    .get(protect, getPostsHandler);
  app
    .route("/posts/:id")
    .get(protect, getPostHandler)
    .patch(protect, updatePostHandler)
    .delete(protect, deletePostHandler);
}
