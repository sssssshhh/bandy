"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { z } from "zod";

// TODO: 타입x, null 일 경우에 메세지가 표시x
const formSchema = z
  .object({
    email: z
    .string({
      required_error: "Where is my email?",
    })
    .email(),
    password: z.string({
      required_error: "I think you are missing sth"
    })
  });

export async function SigninAction(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const result = await formSchema.spa(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const user = await db.user.findUnique({
      where: {
          email: result.data.email
      },
      select: {
          password: true,
          id: true
      }
    });

    const ok = await bcrypt.compare(result.data.password, user!.password ?? "");
    
    if(ok){
      const session = await getSession();
      session.id = user!.id;
      await session.save();
      redirect("/lectures");
    } else {
      return {
        fieldErrors: {
            password: ["Wrong password"],
            email: []
        }
      }
    }
  }
}