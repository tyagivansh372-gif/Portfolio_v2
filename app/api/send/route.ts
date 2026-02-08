import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // 1. DATA VALIDATION: Prevents empty "Ghost Signals" from being processed
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Protocol Error: Missing required data fields." },
        { status: 400 }
      );
    }

    // 2. TACTICAL TRANSMISSION: Using Resend with proper headers
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Keep as onboarding@resend.dev for unverified domains
      to: ['tyagivansh372@gmail.com'], 
      replyTo: email, // CRITICAL: Allows you to reply directly to the user
      subject: `[TACTICAL SIGNAL] // From: ${name}`,
      text: `IDENTIFIED USER: ${name}\nSIGNAL ORIGIN: ${email}\n\nMESSAGE BODY:\n${message}`,
    });

    // 3. ERROR LOGGING: Catches provider-side failures (e.g., API limits)
    if (error) {
      console.error("Resend System Error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Internal Server Crash:", error);
    return NextResponse.json(
      { error: "Internal System Failure during signal relay." },
      { status: 500 }
    );
  }
}