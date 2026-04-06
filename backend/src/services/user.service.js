import bcrypt from 'bcrypt';
import { UserRepository } from '../repositories/user.repository.js';

const getAllUsers = async () => {
    return await UserRepository.getAllUsers();
};

const getUserByUsername = async (username) => {
    return await UserRepository.getUserByUsername(username);
};

const createUser = async (userData) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

    const userWithHashedPassword = {
        ...userData,
        password: hashedPassword
    };

    return await UserRepository.createUser(userWithHashedPassword);
};

const getGroupsByUsername = async (username) => {
    return await UserRepository.getGroupsByUsername(username);
};

export const UserService = {
    getAllUsers,
    getUserByUsername,
    createUser,
    getGroupsByUsername
};