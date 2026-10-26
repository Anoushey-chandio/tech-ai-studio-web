import { NextResponse } from "next/server";

type ContactBody = { name?: string; email?: string; message?: string };

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as ContactBody | null;
  const name = body?.name?.trim();
  const email = body?.email?.trim();
  const message = body?.message?.trim();

  if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // TODO: yahan email service (Resend, Nodemailer) ya database connect karein.
  console.log("New contact message:", { name, email, message });

  return NextResponse.json({ ok: true });
}
