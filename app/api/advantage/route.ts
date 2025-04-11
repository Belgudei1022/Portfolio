import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET: Fetch all advantages
export async function GET() {
  try {
    const advantages = await prisma.advantages.findMany();
    return NextResponse.json(advantages);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch advantages" }, { status: 500 });
  }
}

// POST: Add a new advantage
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, image } = body;

    const newAdv = await prisma.advantages.create({
      data: { title, image },
    });

    return NextResponse.json(newAdv, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create advantage" }, { status: 500 });
  }
}
