const mysql = require("mysql2/promise");

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_api',
    port: 3307
  });



  async function authUser(email_usuario, password_usuario) {  
    const results = await connection.query(
        'SELECT * FROM usuario WHERE email = ? AND senha = ?',
        [email_usuario, password_usuario]
        );
        console.log(results);
        return results[0]; 
    }




/* ---------------------------------------------------------------------------------------- */

async function selectUsuarios(){
    const results = await connection.query("SELECT * FROM usuario");
    return results[0];
}

async function selectUsuario(id_usuario){
    const results = await connection.query("SELECT * FROM usuario WHERE id_usuario=?", [id_usuario]);
    return results[0];
}

async function insertUsuario(usuario){
    const values = [usuario.nome, usuario.telefone, usuario.cpf, usuario.email, usuario.senha, usuario.img_documento];
    await connection.query("INSERT INTO usuario(nome, telefone, cpf, email, senha, img_documento) VALUES (?,?,?,?,?,?)", values);
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
    const values = [usuario.descricao,usuario.instagram, usuario.facebook, usuario.img_perfil, id_usuario];
    await connection.query("UPDATE usuario SET descricao=?,instagram=?,facebook=?, img_perfil=? WHERE id_usuario=?", values);
}



/* --------------------------------------------------------------------------------------------- */

async function selectDadosfuncs(){
    const results = await connection.query("SELECT nome_localidade,nome_profissao FROM usuario");
    return results[0];
}

async function selectDadosfunc(id_usuario){
    const results = await connection.query("SELECT nome_localidade,nome_profissao FROM usuario WHERE id_usuario=?", [id_usuario]);
    return results[0];
}

async function updateDadosfunc(id_usuario, usuario){
    const values = [usuario.nome_localidade,usuario.nome_profissao,id_usuario];
    await connection.query("UPDATE usuario SET nome_profissao=?,nome_localidade=? WHERE id_usuario=?", values);
}

/* --------------------------------------------------------------------------------------------- */



module.exports = {
    selectUsuarios,
    selectUsuario,
    insertUsuario,
    updateUsuario,
    deleteUsuario,
    selectRedess,
    selectRedes,
    updateRedes,
    updateDadosfunc,
    selectDadosfuncs,
    selectDadosfunc,
    authUser,
  
}, connection;





















