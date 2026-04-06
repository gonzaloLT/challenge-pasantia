export default function UserTable({ users }) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="px-6 py-4 text-sm md:text-base font-semibold text-gray-600 uppercase tracking-wider">
                                Username
                            </th>
                            <th className="px-6 py-4 text-sm md:text-base font-semibold text-gray-600 uppercase tracking-wider text-center">
                                Estado
                            </th>
                            <th className="px-6 py-4 text-sm md:text-base font-semibold text-gray-600 uppercase tracking-wider text-right">
                                Fecha y Hora de Creación
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {users.map((u) => (
                            <tr
                                key={u.id}
                                className="hover:bg-gray-50 transition-colors duration-150"
                            >
                                <td className="px-6 py-4 text-sm md:text-base text-gray-800 font-medium">
                                    {u.username}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span
                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs md:text-sm font-medium ${
                                            u.status === "activo"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                        }`}
                                    >
                                        {u.status.charAt(0).toUpperCase() +
                                            u.status.slice(1)}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm md:text-base text-gray-500 text-right">
                                    {new Date(u.created_at).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {users.length === 0 && (
                <div className="text-center py-8 text-gray-500 md:text-lg">
                    No hay usuarios registrados.
                </div>
            )}
        </div>
    );
}
