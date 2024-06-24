"use server";

import { z } from "zod";

const PASSWORD_MIN_LENGTH = 4;
const PASSWORD_REGEX = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/
);
const PASSWORD_REGEX_ERROR =
  "Passwords must contain at least one UPPERCASE, lowercase, number and special characters #?!@$%^&*-";

const checkUsername = (username: string) => !username.includes("potato");

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
      .toLowerCase(),
    email: z.string({
      required_error: "Where is your email???",
    }).email().toLowerCase(),
    password: z.string().min(PASSWORD_MIN_LENGTH),
    confirm_password: z.string().min(PASSWORD_MIN_LENGTH),
  })
  .refine(checkPasswords, {
    message: "Both passwords should be the same!",
    path: ["confirm_password"],
  });

export async function createAccountAction(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    firstname: formData.get("first_name"),
    lastname: formData.get("last_name"),
    nickname: formData.get("nickname"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = await formSchema.spa(data);
  if (!result.success) {
    return result.error.flatten();
  }
}