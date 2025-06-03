import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {

        const body = await req.json();

        const { username, email, password } = body;

        if (!username || !email || !password) {
            console.log("Missing required fields:", { username, email, password });
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

        const userCreated = await db.user.create({
            data: {
                name: username,
                email: email,
                password: password
            },
        });

        if (!userCreated) {
            return NextResponse.json({ message: "User creation failed" }, { status: 500 });
        }

        return NextResponse.json({ user: userCreated, message: "User registered successfully" }, { status: 201 });

    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}