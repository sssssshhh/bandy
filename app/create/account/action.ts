"use server";

import { z } from "zod";

const PASSWORD_MIN_LENGTH = 4;

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
      .string().min(1, "Please let me know your firstname"),
    lastname: z
      .string().min(1, "Please let me know your lastname"),
    password: z.string().min(PASSWORD_MIN_LENGTH),
    confirm_password: z.string(),
  })
  .refine(checkPasswords, {
    message: "Both passwords should be the same!",
    path: ["confirm_password"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    firstname: formData.get("first_name"),
    lastname: formData.get("last_name"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten())
    return result.error.flatten();
  }
}