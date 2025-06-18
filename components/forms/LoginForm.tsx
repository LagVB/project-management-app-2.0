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

    return <>
        <form onSubmit={handleSubmit} className="text-main-gray">
            <label>Email Address</label>
            <input name="email" type="email" className="border rounded p-2 mt-2 mb-4 w-full" placeholder="Enter your email" required />
            <label>Password: </label>
            <input name="password" type="password" className="border rounded p-2 mt-2 mb-4 w-full" placeholder="Enter your password" required />
            <div className="flex justify-between">
                <span><input type="checkbox" /> Remember me</span>
                <a href="/register" className="text-main-blue">Forgot Password?</a>
            </div>
            <button type="submit" className="bg-main-blue text-white rounded p-2 w-full">Login</button>

        </form>
    </>
}