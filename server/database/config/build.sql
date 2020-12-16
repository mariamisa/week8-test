BEGIN;

DROP TABLE IF EXISTS users,
todos cascade;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  description VARCHAR(255) NOT NULL,
  done boolean DEFAULT false
);

COMMIT;