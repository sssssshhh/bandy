"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";
import { z } from "zod";

const checkUniqueNickname = async (nickname: string) => {
  const user = await db.user.findUnique({
    where: { nickname },
    select: {id: true},
  })
  return !Boolean(user);
}

const formSchema = z
  .object({
    nickname: z
    .string().trim().min(1, "Please let me know your nickname")
    .refine(checkUniqueNickname, "Sorry, This nickname is being used"),
  });

export async function createNickname(prevState: any, formData: FormData) {
  const data = {
    nickname: formData.get("nickname"),
  };
  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const session = await getSession();

    const user = await db.user.create({
      data: {
        firstname: session.firstName,
        lastname: session.lastName,
        password: session.password,
        email: session.email,
        nickname: result.data.nickname,
        role: "student"
      },
      select: {
        id: true,
      },
    });

    session.id = user.id;
    session.nickname = result.data.nickname;

    await session.save();
    redirect("/lectures")
  }
}