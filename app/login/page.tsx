"use client";

import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import Button from "@/components/button";
import { LoginAction } from "./action";

export default function login() {
  const [state, action] = useFormState(LoginAction, null)
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <form action={action} className="flex flex-col gap-3">
        <Input
          name="email" 
          type="email" 
          placeholder="Email" 
          required
          errors={state?.fieldErrors.email} />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.fieldErrors.password} />
        <Button text="login" />
      </form>
      <SocialLogin />
    </div>
  );
}