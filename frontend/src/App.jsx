import { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import { getUsers, createUser } from "./services/users";

function App() {
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(null);

    async function loadUsers() {
        const data = await getUsers();
        setUsers(data);
    }

    useEffect(() => {
        loadUsers();
    }, []);

    async function handleCreate(user) {
        setError(null);
        try {
            await createUser(user);
            await loadUsers();
            setOpen(false);
        } catch (err) {
            setError(err.message || "Ocurrió un error inesperado al crear el usuario.");
        }
    }

    function handleClose() {
        setOpen(false);
        setError(null);
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">
                    Administración de Usuarios
                </h1>
                <button
                    onClick={() => setOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg shadow-sm transition-colors duration-200"
                >
                    Nuevo Usuario
                </button>
            </div>

            <UserTable users={users} />

            {open && (
                <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity">
                    <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md relative">
                        <h2 className="text-xl font-bold mb-4 text-gray-800">
                            Crear Usuario
                        </h2>
                        <UserForm
                            onSubmit={handleCreate}
                            onClose={handleClose}
                            errorMessage={error}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
