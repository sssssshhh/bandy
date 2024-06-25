"use server";

import db from "@/lib/db";
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
      .string()
      .superRefine((arg, ctx) => {
        if(arg.trim() === ""){
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Please let me know your nickname",
          });
        } else if (!checkUniqueNickname(arg)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Sorry, This nickname is being used",
        });
      }
  })
});

export async function createNickname(prevState: any, formData: FormData) {
  const data = {
    nickname: formData.get("nickname"),
  };
  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  }
}