'use client'

export default function RegisterForm() {

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const username = formData.get("username")?.toString();
        const email = formData.get("email")?.toString();
        const password = formData.get("password")?.toString();

        console.log(username, email, password);

        try {
            const userCreated = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });
            if (!userCreated) {
                console.error("User creation failed");
            }
            else {
                console.log("Register form submitted", { username, email, password });
            }
        }
        catch (error) {
            console.error("Error creating user:", error);
        }
    }
    return <>
        <form onSubmit={handleRegister}>
            <label>Username:</label>
            <input name="username" type="text" className="border rounded p-2 mt-2 mb-4 w-full" placeholder="Enter your username" required />
            <label>Email:</label>
            <input name="email" type="email" className="border rounded p-2 mt-2 mb-4 w-full" placeholder="Enter your email" required />
            <label>Password:</label>
            <input name="password" type="password" className="border rounded p-2 mt-2 mb-4 w-full" placeholder="Enter your password" required />
            <button type="submit" className="bg-blue-500 text-white rounded p-2 w-full hover:bg-blue-600">Register</button>
        </form>
    </>
}