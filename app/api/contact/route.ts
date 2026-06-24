import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export type ContactBody = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

function validate(body: unknown): body is ContactBody {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email.trim()) &&
    typeof b.message === "string" &&
    b.message.trim().length > 0
  );
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    if (!validate(body)) {
      return NextResponse.json(
        { error: "Invalid fields: name, email, and message are required." },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = body;
    const toEmail = process.env.GMAIL_USER;
    if (!toEmail) {
      console.error("GMAIL_USER is not set");
      return NextResponse.json(
        { error: "Server is not configured for email." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const text = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      ...(phone?.trim() ? [`Phone: ${phone.trim()}`] : []),
      "",
      "Message:",
      message.trim(),
    ].join("\n");

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: toEmail,
      replyTo: email.trim(),
      subject: `[Abhyudaya CMS] Contact from ${name.trim()}`,
      text,
      html: text.replace(/\n/g, "<br>"),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
