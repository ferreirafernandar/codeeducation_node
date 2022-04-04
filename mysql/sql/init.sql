USE nodedb;

CREATE TABLE people(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL
);

INSERT INTO people (name) VALUES ('Luffy Alegria Bracho');