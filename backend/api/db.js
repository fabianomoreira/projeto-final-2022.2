const mysql = require("mysql2/promise");

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_api'
  });

async function selectUsuarios(){
    const results = await connection.query("SELECT * FROM usuario");
    return results[0];
}

async function selectUsuario(id_usuario){
    const results = await connection.query("SELECT * FROM usuario WHERE id_usuario=?", [id_usuario]);
    return results[0];
}

async function insertUsuario(usuario){
    const values = [usuario.nome, usuario.telefone, usuario.cpf, usuario.email, usuario.senha];
    await connection.query("INSERT INTO usuario(nome, telefone, cpf, email, senha) VALUES (?,?,?,?,?)", values);
}

async function updateUsuario(id_usuario, usuario){
    const values = [usuario.nome, id_usuario];
    await connection.query("UPDATE usuario SET nome=? WHERE id_usuario=?", values);
}

 async function deleteUsuario(id_usuario){
    const values = [id_usuario];
    await connection.query("DELETE usuario WHERE id_usuario=?", values);
}

/* --------------------------------------------------------------------------------------------- */

async function selectRedess(){
    const results = await connection.query("SELECT descricao,instagram,facebook FROM usuario");
    return results[0];
}

async function selectRedes(id_usuario){
    const results = await connection.query("SELECT descricao,instagram,facebook FROM usuario WHERE id_usuario=?", [id_usuario]);
    return results[0];
}

async function updateRedes(id_usuario, usuario){
    const values = [usuario.descricao,usuario.instagram, usuario.facebook, id_usuario];
    await connection.query("UPDATE usuario SET descricao=?,instagram=?,facebook=? WHERE id_usuario=?", values);
}

/* --------------------------------------------------------------------------------------------- */

async function selectLocais(){
    const results = await connection.query("SELECT * FROM localidade");
    return results[0];
}

async function selectLocal(id_localidade){
    const results = await connection.query("SELECT * FROM localidade WHERE id_localidade=?", [id_localidade]);
    return results[0];
}

async function updateLocal(id_usuario, usuario){
    const values = [usuario.id_localidade, id_usuario];
    await connection.query("UPDATE usuario SET id_localidade=? WHERE id_usuario=?", values);
}

/* --------------------------------------------------------------------------------------------- */

async function selectProffs(){
    const results = await connection.query("SELECT * FROM profissao");
    return results[0];
}

async function selectProff(id_profissao){
    const results = await connection.query("SELECT * FROM profissao WHERE id_profissao=?", [id_profissao]);
    return results[0];
}

async function updateProff(id_usuario,usuario){
    const values = [usuario.id_profissao, id_usuario];
    await connection.query("UPDATE usuario SET id_profissao=? WHERE id_usuario=?", values);
}

/* --------------------------------------------------------------------------------------------- */



/* --------------------------------------------------------------------------------------------- */



/* async function login(usuario){
    const values = [usuario.email, usuario.senha];
    await connection.query("SELECT * FROM usuario WHERE email=? AND senha=?");
}
 */

module.exports = {
    selectUsuarios,
    selectUsuario,
    insertUsuario,
    updateUsuario,
    deleteUsuario,
    selectRedess,
    selectRedes,
    updateRedes,
    updateLocal,
    selectLocais,
    selectLocal,
    updateProff,
    selectProffs,
    selectProff

}





















