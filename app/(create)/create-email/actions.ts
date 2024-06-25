"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import { z } from "zod";

const checkUniqueEmail= async (email: string) => {
  const user = await db.user.findUnique({
    where: { email },
    select: {id: true},
  })
  return !Boolean(user);
}

const formSchema = z
  .object({
    email: z.string()
    .email("Please check if it is correct email")
    .refine(checkUniqueEmail, "Sorry, This email is being used"),
  });

export async function CreateEmail(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
  };
  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const user = await db.user.create({
      data: {
        email: result.data.email,
      },
      select: {
        id: true,
      },
    });
    const session = await getSession();
    session.id = user.id;
    await session.save();
  }
}