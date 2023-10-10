CREATE DATABASE donna_encrenca;

USE donna_encrenca;

CREATE TABLE profissao (
	id_profissao INT(255) AUTO_INCREMENT PRIMARY KEY,
    nome_profissao VARCHAR(255)
);

CREATE TABLE localidade (
	id_localidade INT(255) AUTO_INCREMENT PRIMARY KEY,
    nome_localidade VARCHAR(255)
);

CREATE TABLE documentos (
	id_documentos INT AUTO_INCREMENT PRIMARY KEY,
    img_doc BLOB,
    data_upload DATETIME
);

CREATE TABLE avaliacao (
    id_avaliacao INT AUTO_INCREMENT PRIMARY KEY,
    nota DECIMAL(3, 1) NOT NULL,
    comentario TEXT
);

CREATE TABLE usuario (
	id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(50) NOT NULL,
    img_perfil BLOB,
    data_upload DATETIME,
    descricao TEXT,
    id_profissao INT,
    id_localidade INT,
    id_documentos INT,
    id_avaliacao INT,
	CONSTRAINT fk_docUsu FOREIGN KEY (id_documentos) REFERENCES documentos(id_documentos),
	CONSTRAINT fk_profUsu FOREIGN KEY (id_profissao) REFERENCES profissao(id_profissao),
	CONSTRAINT fk_localUsu FOREIGN KEY (id_localidade) REFERENCES localidade(id_localidade),
	CONSTRAINT fk_avalUsu FOREIGN KEY (id_avaliacao) REFERENCES avaliacao(id_avaliacao)
);