import conectarAoBanco from "../config/dbconfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export default async function getTodosUsuarios() {
  const db = conexao.db("back_js");
  const colecao = db.collection("users");

  return await colecao.find().toArray();
}
