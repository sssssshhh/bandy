"use client";

import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import Button from "@/components/button";
import { createNickname } from "./action";

export default function nickname() {
  const [state, action] = useFormState(createNickname, null)
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <form action={action} className="flex flex-col gap-3">
        <Input
          name="nickname" 
          type="text" 
          placeholder="Your nickname"
          errors={state?.fieldErrors.nickname} />
        <Button text="create nickname" />
      </form>
    </div>
  );
}