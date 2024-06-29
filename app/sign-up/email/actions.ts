"use server";

import getSession from "@/lib/session";
import db from "@/lib/db";
import { z } from "zod";
import { redirect } from "next/navigation";

const checkUniqueEmail= async (email: string) => {
  const user = await db.user.findUnique({
    where: { email },
    select: {id: true},
  })
  return !Boolean(user);
}

const formSchema = z
  .object({
    email: z
    .string().trim().min(1, "Please let me know your email")
    .refine(checkUniqueEmail, "Sorry, This email is being used"),
  });

export async function createEmail(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
  };
  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const session = await getSession();
    session.email = result.data.email;
    await session.save();
    redirect("/sign-up/name-password");
  }
}