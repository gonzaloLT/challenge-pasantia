import 'dotenv/config';
import { Pool } from 'pg';

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    allowExitOnIdle:  true,
});

try {
    await pool.query('SELECT NOW()');
    console.log('Base de datos conectada');
} catch (error) {
    console.error('Error al conectar la base de datos:', error);
    process.exit(1);
}