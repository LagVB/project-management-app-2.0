import { db } from "@/lib/db";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { email, password } = body;

        if (!email || !password) {
            console.log("Missing required fields:", { email, password });
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

        const userLogged = await db.user.findUnique({
            where: {
                email: email,
                password: password,
            }
        });

        if (!userLogged) {
            return NextResponse.json({ message: "User not registered! Register." }, { status: 404 });
        }

        return NextResponse.json({ user: userLogged, message: "You entered!" }, { status: 201 });
    }
    catch (error) {
        console.error("Error trying to log in:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}