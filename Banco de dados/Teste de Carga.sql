SELECT * FROM usuario;
insert into usuario(nome,telefone,cpf,email,senha,descricao) values("Roberta Silva","40028922","11111111111","roberta.silva@email.com","vascodagama","Descrição da Roberta Silva");
insert into usuario(nome,telefone,cpf,email,senha,descricao) values("Daniela Martins","123456789","741852963","emailDaniela@provedor.com","senhaForte","Descrição da Daniela Martins");
insert into usuario(nome,telefone,cpf,email,senha,descricao) values("Juliana Muller","987654321","147258369","jumuller77@email.com","12345678","Descrição da Juliana Muller ");
insert into usuario(nome,telefone,cpf,email,senha,descricao) values("Luani Filho","963852741","654987321","lulu.princesa@email.com","princesa123","Descrição da Luani Filho");
insert into usuario(nome,telefone,cpf,email,senha,descricao) values("Mariana Pessoa","321654987","321987456","marip@email.com","pipocadoce","Descrição aqui da Mariana Pessoa");

SELECT * FROM localidade;
insert into localidade(nome_localidade) values("Itaboraí");
insert into localidade(nome_localidade) values("Magé");
insert into localidade(nome_localidade) values("Niterói");
insert into localidade(nome_localidade) values("Rio de janeiro");
insert into localidade(nome_localidade) values("São Gonçalo");

SELECT * FROM profissao;
insert into profissao(nome_profissao) values("eletricista");
insert into profissao(nome_profissao) values("marceneira");
insert into profissao(nome_profissao) values("mecânica");
insert into profissao(nome_profissao) values("motorista");
insert into profissao(nome_profissao) values("piscineira");

select * from plano;

insert into plano(nome_plano, valor, descricao) values ("mensal","30.00", "com o nosso plano mensal, você terá direito de anunciar o seu serviço na nossa plataforma");
insert into plano(nome_plano, valor, descricao) values ("trimestral","75.00", "com o nosso plano trimestral, você terá direito de anunciar o seu serviço na nossa plataforma");
insert into plano(nome_plano, valor, descricao) values ("anual","300.00", "com o nosso plano anual, você terá direito de anunciar o seu serviço na nossa plataforma");

select * from avaliacao;

insert into avaliacao(nota, comentario, data_avaliacao, id_avaliadora, id_trabalhadora) values ("5", "fez um excelente trabalho","", "2", "3");
insert into avaliacao(nota, comentario, id_avaliadora, id_trabalhadora) values ("4", "trabalhou bem, mas faltou identificação no uniforme", "4", "5");
insert into avaliacao(nota, comentario, id_avaliadora, id_trabalhadora) values ("0", "péssima comunicação e um trabalho pior ainda","1", "5");
insert into avaliacao(nota, comentario, id_avaliadora, id_trabalhadora) values ("1", "não resolveu nada","5", "4");
insert into avaliacao(nota, comentario, id_avaliadora, id_trabalhadora) values ("2","se apresentou suja e enrolou no serviço","3", "2");
insert into avaliacao(nota, comentario, id_avaliadora, id_trabalhadora) values ("4", "soube resolver o problema embora tenha demorado","2", "4");
insert into avaliacao(nota, comentario, id_avaliadora, id_trabalhadora) values ("5", "rapida e precisa!!!", "5", "1");
