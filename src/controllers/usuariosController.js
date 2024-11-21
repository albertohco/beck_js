import getTodosUsuarios from "../models/usuariosModel.js";

export async function listarUsuarios(req, res) {
  try {
    const usuarios = await getTodosUsuarios();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuários" });
  }
}
