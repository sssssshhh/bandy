"use server";

import db from "@/lib/db";
import { z } from "zod";

const PASSWORD_MIN_LENGTH = 4;

const checkUniqueNickname = async (nickname: string) => {
  const user = await db.user.findUnique({
    where: { nickname },
    select: {id: true},
  })
  return !Boolean(user);
}

const checkUniqueEmail= async (email: string) => {
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
    firstname: z
      .string({
        required_error: "Where is your firstname???",
      })
      .toLowerCase(),
    lastname: z
      .string({
        required_error: "Where is your lastname???",
      })
      .toLowerCase(),
    nickname: z
      .string({
        required_error: "Where is your nickname???",
      })
      .toLowerCase()
      .refine(
        checkUniqueNickname, "This is already used"),
    email: z.string({
      required_error: "Where is your email???",
    })
    .email()
    .refine(checkUniqueEmail, "This email is used"),
    password: z.string().min(PASSWORD_MIN_LENGTH),
    confirm_password: z.string(),
  })
  .refine(checkPasswords, {
    message: "Both passwords should be the same!",
    path: ["confirm_password"],
  });

export async function createNickname(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    firstname: formData.get("first_name"),
    lastname: formData.get("last_name"),
    nickname: formData.get("nickname"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  }
}