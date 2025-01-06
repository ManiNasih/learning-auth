"use server";

import { loginSchema } from "@/schemas";
import { z } from "zod";

export const login = async (values: z.infer<typeof loginSchema>) => {
  const validatedField = loginSchema.safeParse(values);

  if (!validatedField.success) {
    return { error: "Invalidated fields" };
  }

  return { success: "Email sent!" };
};
