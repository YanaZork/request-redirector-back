import { Pool } from 'pg';

const pool = new Pool({
    max: 20,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: 'DataBaseMachines',
    password: process.env.DB_PASS,
    port: 5432,
    idleTimeoutMillis: 30000
})
export default pool;