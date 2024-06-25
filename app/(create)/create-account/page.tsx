"use client";

import Input from "@/components/input";
import { useFormState } from "react-dom";
import Button from "@/components/button";
import { createAccount } from "./actions";

export default function CreateAccount() {
  const [state, action] = useFormState(createAccount, null)
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <form action={action} className="flex flex-col gap-3">
        <Input
          name="first_name" 
          type="text" 
          placeholder="Your first name"
          errors={state?.fieldErrors.firstname} />
        <Input
          name="last_name" 
          type="text"
          placeholder="Your last name"
          errors={state?.fieldErrors.lastname} />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          errors={state?.fieldErrors.password} />
        <Input
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          errors={state?.fieldErrors.confirm_password}/>
        <Button text="create account" />
      </form>
    </div>
  );
}