import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET: Fetch all certificates
export async function GET() {
  try {
    const certificates = await prisma.certificates.findMany();
    return NextResponse.json(certificates);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch certificates" }, { status: 500 });
  }
}

// POST: Add a new certificate
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, image, link } = body;

    const newCert = await prisma.certificates.create({
      data: { title, image, link },
    });

    return NextResponse.json(newCert, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create certificate" }, { status: 500 });
  }
}
