"use server";

import { z } from "zod";


const formSchema = z
  .object({
    email: z.string({
      required_error: "Where is your email???",
    }).email().toLowerCase(),
    password: z.string()
  });

export async function LoginAction(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const result = await formSchema.spa(data);
  if (!result.success) {
    return result.error.flatten();
  }
}