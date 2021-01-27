DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100), NOT NULL,
    isDevoured BOOLEAN,
    PRIMARY KEY(id)
);
