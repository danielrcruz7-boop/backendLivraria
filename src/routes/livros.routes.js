import {atualizaLivro, criarLivro, deletaLivro, listarLivros, obterLivro} from "../controllers/livros.controller.js"
import express from "express";

const route = express.Router();

route.post("/",criarLivro)
route.get("/", listarLivros)
route.get("/:id", obterLivro)
route.put("/:id", atualizaLivro)
route.delete("/:id", deletaLivro) 

export default route;