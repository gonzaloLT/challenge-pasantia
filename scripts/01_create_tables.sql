CREATE DATABASE challenge_pasantia

CREATE TABLE users_base (
	id SERIAL PRIMARY KEY,
	username VARCHAR(50) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	status VARCHAR(20) CHECK (status IN ('activo', 'inactivo')) NOT NULL
);

CREATE TABLE security_groups (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) UNIQUE NOT NULL,
	description VARCHAR(200)
);

CREATE TABLE access_level (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE user_security (
	user_id INT NOT NULL REFERENCES users_base(id) ON DELETE CASCADE,
	group_id INT NOT NULL REFERENCES security_groups(id) ON DELETE CASCADE,
	access_level_id INT NOT NULL REFERENCES access_level(id) ON DELETE RESTRICT,
	PRIMARY KEY (user_id, group_id)
);