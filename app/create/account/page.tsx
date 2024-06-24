"use client";

import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import Button from "@/components/button";
import { createAccount } from "./action";

export default function account() {
  const [state, action] = useFormState(createAccount, null)
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
          name="first_name" 
          type="text" 
          placeholder="Your first name"
          required
          errors={state?.fieldErrors.firstname} />
        <Input
          name="last_name" 
          type="text"
          placeholder="Your last name"
          required
          errors={state?.fieldErrors.lastname} />
        <Input
          name="nickname" 
          type="text" 
          placeholder="Your nickname"
          required 
          errors={state?.fieldErrors.nickname} />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.fieldErrors.password} />
        <Input
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          required
          errors={state?.fieldErrors.confirm_password}/>
        <Button text="create account" />
      </form>
      <SocialLogin />
    </div>
  );
}