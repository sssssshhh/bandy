"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import { z } from "zod";

const checkUniqueNickname= async (nickname: string) => {
    const user = await db.user.findUnique({
      where: { nickname },
      select: {id: true},
    })
    return !Boolean(user);
  }

  const formSchema = z
  .object({
    nickname: z
    .string().trim().min(1, "Please let me know new nickname")
    .refine(checkUniqueNickname, "This nickname is already taken"),
  });

export async function EditNickname(prevState: any, formData: FormData) {
    const data = {
        nickname: formData.get("nickname"),
      };
      const result = await formSchema.safeParseAsync(data);
      if (!result.success) {
        return result.error.flatten();
      } else {
        // TODO: user nickname edit
        const session = await getSession();
        session.nickname = result.data.nickname;
        await session.save();
      }
}