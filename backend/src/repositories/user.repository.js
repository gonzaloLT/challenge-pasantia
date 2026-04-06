import { pool } from '../db/connection.js';

const getAllUsers = async () => {
    const query = {
        text: `SELECT id, username, created_at, status FROM users_base`
    };
    const { rows } = await pool.query(query);
    return rows;
};

const getUserByUsername = async (username) => {
    const query = {
        text: `SELECT id, username, created_at, status FROM users_base WHERE username = $1`,
        values: [username]
    };
    const { rows } = await pool.query(query);
    return rows[0];
};

const createUser = async (user) => {
    const { username, password, status } = user;
    const query = {
        text: `
            INSERT INTO users_base (username, password, status) 
            VALUES ($1, $2, $3) 
            RETURNING id, username, created_at, status
        `,
        values: [username, password, status]
    };
    
    try {
        const { rows } = await pool.query(query);
        return rows[0];

    } catch (dbError) {
        if (dbError.code === '23505') {
            const error = new Error('El nombre de usuario ya existe');
            error.type = 'CONFLICT';
            throw error;
        }
        throw dbError;
    }
};

const getGroupsByUsername = async (username) => {
    const query = {
        text: `SELECT sg.id, sg.name, sg.description, al.name AS access_level
               FROM security_groups sg
               JOIN user_security us ON sg.id = us.group_id
               JOIN users_base ub ON us.user_id = ub.id
               JOIN access_level al ON us.access_level_id = al.id
               WHERE ub.username = $1`,
        values: [username]
    };
    const { rows } = await pool.query(query);
    return rows;
};

export const UserRepository = {
    getAllUsers,
    getUserByUsername,
    createUser,
    getGroupsByUsername
};