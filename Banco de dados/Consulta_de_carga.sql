select usuario.nome, usuario.telefone, profissao.nome_profissao from usuario inner join profissao
on usuario.id_usuario = profissao.id_profissao;