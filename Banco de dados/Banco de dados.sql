CREATE DATABASE db_api;

USE db_api;

CREATE TABLE profissao (
	id_profissao INT AUTO_INCREMENT PRIMARY KEY,
    nome_profissao VARCHAR(50) NOT NULL
);

CREATE TABLE localidade (
	id_localidade INT AUTO_INCREMENT PRIMARY KEY,
    nome_localidade VARCHAR(50) NOT NULL
);

CREATE TABLE plano (
    id_plano INT AUTO_INCREMENT PRIMARY KEY,
    nome_plano VARCHAR(100) NOT NULL,
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
    img_perfil VARCHAR(1000),
    img_documento VARCHAR(1000),
    data_upload DATETIME DEFAULT CURRENT_TIMESTAMP,
    descricao TEXT,
    instagram VARCHAR(1000),
    facebook VARCHAR(1000),
    id_profissao INT,
    id_localidade INT,
    id_plano INT,
	CONSTRAINT fk_profUsu FOREIGN KEY (id_profissao) REFERENCES profissao(id_profissao),
	CONSTRAINT fk_localUsu FOREIGN KEY (id_localidade) REFERENCES localidade(id_localidade),
    CONSTRAINT fk_planUsu FOREIGN KEY (id_plano) REFERENCES plano(id_plano)
    );
    
CREATE TABLE avaliacao (
    id_avaliacao INT AUTO_INCREMENT PRIMARY KEY,
    nota INT NOT NULL,
    comentario TEXT,
    data_avaliacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    id_avaliadora INT,
    id_trabalhadora INT,
    CONSTRAINT fk_avaliaUsu FOREIGN KEY (id_avaliadora) REFERENCES usuario(id_usuario),
    CONSTRAINT fk_trabUsu FOREIGN KEY (id_trabalhadora) REFERENCES usuario(id_usuario)
);
