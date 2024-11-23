import express from "express";
import { listarPosts, postarNovoPost } from "../controllers/postsController.js";
import { listarUsuarios } from "../controllers/usuariosController.js";

const routes = (app) => {
  app.use(express.json());
  app.get("/posts", listarPosts);
  app.get("/usuarios", listarUsuarios);
  app.post("/posts", postarNovoPost);
};

export default routes;
