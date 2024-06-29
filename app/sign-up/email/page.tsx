"use client";

import Input from "@/components/input";
import { useFormState } from "react-dom";
import Button from "@/components/button";
import SocialLogin from "@/components/social-login";
import { createEmail } from "./actions";

export default function Account() {
  const [state, email] = useFormState(createEmail, null)
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div>Sign Up</div>
      <div>Think in Korean like a Native with Lang-wich!</div>
      <SocialLogin />
        <form action={email} className="flex flex-col gap-3">
          <Input
            name="email"
            type="text"
            placeholder="Email"
            errors={state?.fieldErrors.email} />
          <Button text="Continue" />
        </form>
      </div>
  );
}

