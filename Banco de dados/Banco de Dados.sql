CREATE DATABASE db_api;

USE db_api;

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
    img_perfil longtext,
    img_documento longtext,
    descricao TEXT NOT NULL,
    instagram VARCHAR(1000),
    facebook VARCHAR(1000),
    nome_profissao VARCHAR(500),
    nome_localidade VARCHAR(500),
    id_plano INT,
    CONSTRAINT fk_planUsu FOREIGN KEY (id_plano) REFERENCES plano(id_plano)
    );
