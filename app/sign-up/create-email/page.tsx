"use client";

import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import Button from "@/components/button";
import { CreateEmail } from "./actions";

export default function email() {
  const [state, action] = useFormState(CreateEmail, null)
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <form action={action} className="flex flex-col gap-3">
        <Input
          name="email" 
          type="text" 
          placeholder="Email" 
          errors={state?.fieldErrors.email} />
        <Button text="create email" />
      </form>
      <SocialLogin />
    </div>
  );
}