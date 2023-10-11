CREATE DATABASE donna_encrenca;

USE donna_encrenca;

CREATE TABLE profissao (
	id_profissao INT AUTO_INCREMENT PRIMARY KEY,
    nome_profissao VARCHAR(100) NOT NULL
);

CREATE TABLE localidade (
	id_localidade INT AUTO_INCREMENT PRIMARY KEY,
    nome_localidade VARCHAR(100) NOT NULL
);

CREATE TABLE documentos (
	id_documentos INT AUTO_INCREMENT PRIMARY KEY,
    img_doc BLOB,
    data_upload DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE avaliacao (
    id_avaliacao INT AUTO_INCREMENT PRIMARY KEY,
    nota DECIMAL(3, 1) NOT NULL,
    comentario TEXT,
    data_avaliacao DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE plano (
    id_plano INT AUTO_INCREMENT PRIMARY KEY,
    valor DECIMAL(5, 2) NOT NULL,
    descricao TEXT
);

CREATE TABLE usuario (
	id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(60) NOT NULL,
    img_perfil BLOB,
    data_upload DATETIME DEFAULT CURRENT_TIMESTAMP,
    descricao TEXT,
    id_profissao INT,
    id_localidade INT,
    id_documentos INT,
    id_avaliacao INT,
    id_plano INT,
	CONSTRAINT fk_docUsu FOREIGN KEY (id_documentos) REFERENCES documentos(id_documentos),
	CONSTRAINT fk_profUsu FOREIGN KEY (id_profissao) REFERENCES profissao(id_profissao),
	CONSTRAINT fk_localUsu FOREIGN KEY (id_localidade) REFERENCES localidade(id_localidade),
	CONSTRAINT fk_avalUsu FOREIGN KEY (id_avaliacao) REFERENCES avaliacao(id_avaliacao),
    CONSTRAINT fk_planUsu FOREIGN KEY (id_plano) REFERENCES plano(id_plano)
);
