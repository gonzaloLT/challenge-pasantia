import { useState } from "react";

export default function UserForm({ onSubmit, onClose, errorMessage }) {
    const [form, setForm] = useState({
        username: "",
        password: "",
        status: "activo",
    });
    const [isLoading, setIsLoading] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        try {
            await onSubmit(form);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {errorMessage && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
                    <div className="flex">
                        <div className="shrink-0">
                            <svg
                                className="h-5 w-5 text-red-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-red-700 font-medium">
                                {errorMessage}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <div>
                <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="username"
                >
                    Username
                </label>
                <input
                    id="username"
                    name="username"
                    placeholder="Ingrese el nombre de usuario"
                    value={form.username}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                />
            </div>

            <div>
                <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="password"
                >
                    Password
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Ingrese la contraseña"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                />
            </div>

            <div>
                <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="status"
                >
                    Estado
                </label>
                <select
                    id="status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                >
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                </select>
            </div>

            <div className="flex justify-end gap-3 mt-2">
                <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors shadow-sm"
                >
                    {isLoading ? "Guardando..." : "Guardar"}
                </button>
            </div>
        </form>
    );
}