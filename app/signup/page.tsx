"use client";

import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import Button from "@/components/button";
import { handleForm } from "./action";

export default function signup() {
  const [state, action] = useFormState(handleForm, null)
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <form action={action} className="flex flex-col gap-3">
        <Input name="email" type="email" placeholder="Email" required errors={[]} />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.errors ?? []}
        />
        <Button text="Log in" />
      </form>
      <SocialLogin />
    </div>
  );
}