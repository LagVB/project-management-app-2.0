'use client'

import { redirect, useRouter } from "next/navigation";


export default function LoginForm() {

    const route = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const email = formData.get("email")?.toString();
        const password = formData.get("password")?.toString();

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const userLogged = await response.json();

            if (!userLogged) console.error("User not found");
            route.push("/dashboard");
        }
        catch (error) {
            console.error("Error logging in:", error);
        }
    }

    return <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input name="email" type="email" className="border rounded p-2 mt-2 mb-4 w-full" placeholder="Enter your email" required />
        <label>Password: </label>
        <input name="password" type="password" className="border rounded p-2 mt-2 mb-4 w-full" placeholder="Enter your password" required />
        <button type="submit" className="bg-blue-500 text-white rounded p-2 w-full hover:bg-blue-600">Login</button>
        <div className="text-center mt-4">
            <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a>
        </div>
        <div className="text-center mt-2">
            <a href="/register" className="text-blue-500 hover:underline">Create an Account</a>
        </div>
    </form>
}