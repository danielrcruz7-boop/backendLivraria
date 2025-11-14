
import {atualizaUsuario, criarUsuario, deletaUsuario, listarUsuarios, obterUsuario} from "../controllers/usuarios.controller.js"
import express from "express";

const route = express.Router();

route.post("/",criarUsuario)
route.get("/", listarUsuarios)
route.get("/:id", obterUsuario)
route.put("/:id", atualizaUsuario)
route.delete("/:id", deletaUsuario) 

export default route;