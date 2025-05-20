export const createTableQuery = `
  CREATE TABLE IF NOT EXISTS Contact (
    id SERIAL PRIMARY KEY,
    phoneNumber VARCHAR(255),
    email VARCHAR(255),
    linkedId INTEGER REFERENCES Contact(id),
    linkPrecedence VARCHAR(10) CHECK (linkPrecedence IN ('primary', 'secondary')) NOT NULL DEFAULT 'primary',
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW(),
    deletedAt TIMESTAMP
  );
`;
