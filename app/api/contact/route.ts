import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const contactToEmail = process.env.CONTACT_TO_EMAIL;
const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  if (!resend || !contactToEmail || !contactFromEmail) {
    console.error("Contact form is missing required environment variables.");
    return Response.json({ error: "Configuration error" }, { status: 500 });
  }

  const formData = await request.formData();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!email || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const timestamp = new Date().toISOString();

  try {
    await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      replyTo: email,
      subject: "New ItReveal website message",
      text: [
        "New ItReveal website message",
        "",
        `Name: ${name || "Not provided"}`,
        `Email: ${email}`,
        `Message:`,
        message,
        "",
        `Timestamp: ${timestamp}`,
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact message", error);
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }
}
