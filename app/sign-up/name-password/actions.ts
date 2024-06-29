"use server";

import getSession from "@/lib/session";
import { redirect } from "next/navigation";
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

export async function CreateNamePasssword(prevState: any, formData: FormData) {
  const data = {
    firstname: formData.get("first_name"),
    lastname: formData.get("last_name"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const session = await getSession();
    session.firstName = result.data.firstname;
    session.lastName = result.data.lastname;
    session.password = result.data.password;
    await session.save();
    redirect("/sign-up/nickname");
  }
}