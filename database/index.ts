import { Client } from 'pg';

async function getPostgresConnection() {
  const client = new Client({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: parseInt(process.env.DATABASE_PORT ?? '5432'),
  });

  await client.connect();

  return {
    client,
  };
}

export { getPostgresConnection };
