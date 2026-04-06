const API_URL = import.meta.env.VITE_API_URL;

export async function getUsers() {
    const res = await fetch(`${API_URL}/users`);

    if (!res.ok) throw new Error("Error fetching users");

    const json = await res.json();
    return json.data;
}

export async function createUser(user) {
    const res = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: user.username,
            password: user.password,
            status: user.status,
        }),
    });

    const json = await res.json();

    if (!res.ok) {
        throw new Error(json.error || "Error creating user");
    }

    return json.data;
}
