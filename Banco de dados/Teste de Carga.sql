SELECT * FROM usuario;
insert into usuario(nome,telefone,cpf,email,senha,descricao,nome_profissao,nome_localidade) values("Roberta Silva","40028922","11111111111","roberta.silva@email.com","vascodagama","Descrição da Roberta Silva","Eletricista","São Gonçalo");
insert into usuario(nome,telefone,cpf,email,senha,descricao,nome_profissao,nome_localidade) values("Daniela Martins","123456789","741852963","emailDaniela@provedor.com","senhaForte","Descrição da Daniela Martins","Mecânica","Itaboraí");
insert into usuario(nome,telefone,cpf,email,senha,descricao,nome_profissao,nome_localidade) values("Juliana Muller","987654321","147258369","jumuller77@email.com","12345678","Descrição da Juliana Muller","Encanadora","Niterói");
insert into usuario(nome,telefone,cpf,email,senha,descricao,nome_profissao,nome_localidade) values("Luani Filho","963852741","654987321","lulu.princesa@email.com","princesa123","Descrição da Luani Filho","Diarista","Magé");
insert into usuario(nome,telefone,cpf,email,senha,descricao,nome_profissao,nome_localidade) values("Mariana Pessoa","321654987","321987456","marip@email.com","pipocadoce","Descrição aqui da Mariana Pessoa","Empreiteira","Rio de Janeiro");

SELECT * FROM plano;
insert into plano(nome_plano, valor, descricao) values ("mensal","30.00", "com o nosso plano mensal, você terá direito de anunciar o seu serviço na nossa plataforma");
insert into plano(nome_plano, valor, descricao) values ("trimestral","75.00", "com o nosso plano trimestral, você terá direito de anunciar o seu serviço na nossa plataforma");
insert into plano(nome_plano, valor, descricao) values ("anual","300.00", "com o nosso plano anual, você terá direito de anunciar o seu serviço na nossa plataforma");
