"use server";

import db from "@/lib/db";
// TODO: duplicate code with name-password 
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { z } from "zod";

const PASSWORD_MIN_LENGTH = 4;

const checkUniqueEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: { email },
    select: {id: true},
  })
  return !Boolean(user);
}

const checkPasswords = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const formSchema = z
  .object({
    email: z
      .string()
      .refine(checkUniqueEmail, "This email is already taken"),
    firstname: z
      .string(),
    lastname: z
      .string(),
    password: z.string().trim().min(PASSWORD_MIN_LENGTH),
    confirm_password: z.string().trim()
  })
  .refine(checkPasswords, {
    message: "Both passwords should be the same",
    path: ["confirm_password"],
  })

export async function EditNamePasssword(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    firstname: formData.get("first_name"),
    lastname: formData.get("last_name"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const hashedPassword = await bcrypt.hash(result.data.password, 12);
    // TODO: update account
    redirect("/mypage")
  }
}