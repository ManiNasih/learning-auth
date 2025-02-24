"use server";

import { registerSchema } from "@/schemas";
import { z } from "zod";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendEmail } from "./sendMail";

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validatedField = registerSchema.safeParse(values);

  if (!validatedField.success) {
    return { error: "Invalidated fields" };
  }

  const { email, password, name } = validatedField.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);
  await sendEmail(
    verificationToken.email,
    verificationToken.token,
    verificationToken.expires,
  );

  return { success: "Confirmation email sent!" };
};
