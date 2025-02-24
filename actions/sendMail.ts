"use server";
import nodemailer from "nodemailer";
import { formatDate } from "@/lib/utils";

export async function sendEmail(email: string, token: string, date: Date) {
  // Create a transporter using your email service (e.g., Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail", // or your chosen service
    auth: {
      user: process.env.EMAIL_USER, // stored securely in your .env file
      pass: process.env.EMAIL_PASS,
    },
  });

  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Confirm your email",
      html: `<p>Click <a href="${confirmLink}">here</a> to confirm your email. this will expire on ${formatDate(date)}</p>`,
    });

    return { success: "Email sent!" };
  } catch (error) {
    return { error };
  }
}
