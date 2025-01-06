import { registerSchema } from "@/schemas";
import { z } from "zod";

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validatedField = registerSchema.safeParse(values);

  if (!validatedField.success) {
    return { error: "Invalidated fields" };
  }

  return { success: "Email sent!" };
};
