import { UserService } from "../services/user.service.js";

const getAll = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        res.status(200).json({ data: users });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const create = async (req, res) => {
    const { username, password, status } = req.body;

    if (!username || !password || !status) {
        return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    if (!["activo", "inactivo"].includes(status)) {
        return res.status(400).json({ error: "Status debe ser activo o inactivo" });
    }

    try {
        const newUser = await UserService.createUser({username, password, status});
        res.status(201).json({ data: newUser });
        
    } catch (error) {
        if (error.type === "CONFLICT") {
            return res.status(409).json({ error: error.message });
        }
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getByUsername = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await UserService.getUserByUsername(username);

        if (!user) {
            return res.status(404).json({ error: "Not Found" });
        }

        res.status(200).json({ data: user });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getGroups = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await UserService.getUserByUsername(username);
        if (!user) return res.status(404).json({ error: "Not Found" });

        const groups = await UserService.getGroupsByUsername(username);
        res.status(200).json({ data: groups });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const UserController = {
    getAll,
    getByUsername,
    create,
    getGroups,
};
